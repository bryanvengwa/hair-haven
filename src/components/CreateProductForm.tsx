'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { SetStateAction, useState } from 'react';
import Image from 'next/image';

export default function CreateProductForm() {
  const [image, setImage] = useState<any>(null);
  const [fileName, setFileName] = useState('No selected file');
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Product Name</Label>
        <Input id="title" name="title" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="unit_price">Price</Label>
        <Input id="unit_price" name="unit_price" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="product_type">Product Type</Label>
        <Input id="product_type" name="product_type" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="product_type">Inventory</Label>
        <Input id="product_type" type="number" name="product_type" required />
      </div>
      <div
        className="flex flex-col items-center justify-center image-input h-[200px]   gap-2 cursor-pointer rounded-[5px]"
        onClick={() => {
          const fileInput = document.querySelector(
            '.image-input-field'
          ) as HTMLInputElement;
          if (fileInput) {
            fileInput.click();
          }
        }}
      >
        <Label htmlFor="image">Image</Label>
        <Input
          className="image-input-field bg-red-600 h-full w-full"
          id="iamge"
          type="file"
          accept="image/*"
          name="image"
          required
          hidden
          onChange={({ target: { files } }) => {
            if (files) {
              files[0] && setFileName(files[0].name);
              files[0] && setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {image ? (
          <Image src={image} alt={fileName} />
        ) : (
          <MdCloudUpload color="#7fad39" size={70} />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          placeholder="Type your message here."
        />
      </div>
      <div>
        <button className="border-none bg-[#7fad39] text-white rounded-[7px] p-[2rem] pt-[1rem]  pb-[1rem] flex align-center gap-2 ">
          Submit
        </button>
      </div>
    </div>
  );
}
