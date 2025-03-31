"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const ProductImages = ({images}:{images:string[]}) => {
    const [current,setCurrent] = useState(0)
  return (
    <div className="space-y-4">
        <Image 
            src={images[current]}
            alt="product image"
            width={500}
            height={500}
            className="w-full rounded-lg shadow-lg h-full min-h-[300px] object-cover object-center"
        />
        <div className="flex flex-wrap gap-2">
            {
                images.map((img,index) => <Image width={100} height={120} src={img} key={index + img} alt='Product Image variant' className={`cursor-pointer object-cover rounded-md shadow-md ${index === current ? 'border-3 border-orange-600 shadow-xl ' : ''}`} onClick={() => setCurrent(index)} />)
            }
        </div>
    </div>
  )
}

export default ProductImages