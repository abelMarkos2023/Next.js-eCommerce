import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductImages from '@/components/ui/shared/products/ProductImages';
import ProductPrice from '@/components/ui/shared/products/ProductPrice';
import { getProductBySlug } from '@/lib/actions/products.actions';
import { notFound } from 'next/navigation';
import React from 'react'

const ProductDetail = async  (props:{params:Promise<{slug:string}>}) => {

    const {slug} = await props.params;

    const product = await getProductBySlug(slug);

    if(!product) return notFound();
  return (
        <section className='pt-12'>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Images section */}
                <div className="col-span-2">
                    <ProductImages images={[...product.images,'/images/sample-products/p3-1.jpg','/images/sample-products/p4-2.jpg','/images/sample-products/p5-1.jpg','/images/sample-products/p6-2.jpg']}/>
                </div>
                {/* End of images section */}
                {/* Product details section */}
                <div className="col-span-2 flex flex-col gap-4">
                <div className="flex flex-col gap-6">
                <p className='text-xl'>{product.brand} - {product.category}</p>
                <h1 className="h3-bold">{product.name}</h1>
                <p className="text-yellow-600 font-semibold">{product.rating} of {product.numReviews} Review</p>
                <ProductPrice className='w-24 rounded-lg bg-green-100 text-green-800 px-1 py-2 flex items-center justify-center' value={Number(product.price)}/>
                </div>
                <div className="mt-8 space-y-3">
                    <p className="font-semibold">Description</p>
                    <p className="text-base">{product.description}</p>
                </div>
                </div>
                {/* End of product details section */}
                {/* Action section */}
                <div className="col-span-1">
                    <Card>
                        <CardContent className='p-2'>
                            <div className="mb-2 flex justify-between">
                                <div className="font-semibold text-lg">Price</div>
                                <div><ProductPrice value={Number(product.price)}/></div>
                            </div>
                            <div className="flex mb-4 justify-between">
                                <div>Stock</div>
                                <div>
                                    {
                                        product.stock > 0 ? <Badge variant='outline'>In Stock</Badge>: <Badge variant='destructive'>Out of Stock</Badge>
                                    }
                                </div>
                            </div>
                            <Button className='w-full' disabled={product.stock === 0}>Add To Cart</Button>
                        </CardContent>
                    </Card>
                </div>
                {/* End of Action section */}
            </div>
        </section>
  )
}

export default ProductDetail