import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const revalidate = 3600 // revalidate every hour

async function getApiProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('type', 'api')
  
  if (error) {
    console.error('Error fetching API products:', error)
    return []
  }
  
  return data
}

export default async function ApiServicesPage() {
  const products = await getApiProducts()

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">API Services</h1>
        <p>No API services found.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">API Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
              <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/products/${product.id}`}>
                <Button>View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}