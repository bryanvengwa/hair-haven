import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface BlogImageProps{
    imageUrl : string;
}

export default function BlogImage({imageUrl}:BlogImageProps) {
  return (
    <div>
        <Image src={imageUrl} layout='fill'  alt="Blog picture" />
      
    </div>
  )
}
