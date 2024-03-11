import React from 'react';
import Image from 'next/image';

interface CartImgProps {
  imageUrl: string;
}

export default function CartImg({ imageUrl }: CartImgProps) {
  return (
    <div className='cart-image' >
      <Image src={imageUrl} width={200} height={200} className='img-fluid'  objectFit='cover' alt='product image' />
    </div>
  );
}
