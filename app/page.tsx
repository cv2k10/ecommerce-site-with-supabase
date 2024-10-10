import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to SoftwareHub</h1>
      <p className="text-xl mb-12 text-center">Your one-stop shop for software applications and API services</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Software Applications</CardTitle>
            <CardDescription>Discover a wide range of software solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Browse through our curated collection of software applications designed to meet various business and personal needs.</p>
          </CardContent>
          <CardFooter>
            <Link href="/software">
              <Button>
                Explore Software
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Services</CardTitle>
            <CardDescription>Integrate powerful APIs into your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Find the perfect API services to enhance your applications and streamline your development process.</p>
          </CardContent>
          <CardFooter>
            <Link href="/api-services">
              <Button>
                Discover APIs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/products">
          <Button size="lg">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}