import React from 'react'
import { Card, CardContent, CardHeader } from '../../card'
import Link from 'next/link'
import Image from 'next/image'
import ProductPrice from './ProductPrice'
import { TProduct } from '@/types'

const ProductCard = ({product}:{product:TProduct}) => {
  return (
    <Card className='w-full max-w-sm p-0 rounded-xl overflow-hidden shadow-xl'>
        <CardHeader className='p-0 items-center'>
            <Link href={`/${product.slug}`}>
                <Image height={300} width={300} src={product.images[0]} alt={product.name} className='object-cover'/>
            </Link>
        </CardHeader>
        <CardContent className='p-2 '>
            <div className="flex flex-col justify-between h-30">
            <Link href={`/${product.slug}`} className="text-sm font-medium text-blue-400">
              <h3 className="text-base font-semibold">{product.name}</h3>
            </Link>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-yellow-400">Ratting: {product.rating}</span>
                    <div className="text-sm font-medium text-orange-400">
                        <ProductPrice value={Number(product.price)}/>
                    </div>
                    
                </div>
            </div>
        </CardContent>
    </Card>
)
}

export default ProductCard