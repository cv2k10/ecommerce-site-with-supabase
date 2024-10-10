import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabase'
import AddToCartButton from '@/components/AddToCartButton'

async function getProduct(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching product:', error)
    return null
  }
  
  return data
}

export async function generateStaticParams() {
  const { data: products } = await supabase.from('products').select('id')
  return products?.map((product) => ({
    id: product.id.toString(),
  })) || []
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-8">{product.description}</p>
      <AddToCartButton product={product} />
    </div>
  )
}