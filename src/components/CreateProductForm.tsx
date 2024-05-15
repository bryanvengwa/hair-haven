'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { AppUrl } from '@/utils/AppData';

export default function CreateProductForm() {
  const [image, setImage] = useState<any>(null);
  const [fileName, setFileName] = useState('Browse Files To Upload');

  const handleSubmit = async function (event: any) {
    event.preventDefault();
    // Get form data
    try {
      const formData = new FormData(event.target as HTMLFormElement);

      const imageInput = document.querySelector(
        '.image-input-field'
      ) as HTMLInputElement;
      if (imageInput && imageInput.files && imageInput.files.length > 0) {
        // formData.append('image', imageInput.files[0]);
      }

      
      const response = await fetch(AppUrl + 'store/products', {
        method: 'POST',

        body: formData,

      });
      console.log(response.status);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Product Name</Label>
        <Input id="title" name="title" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="unit_price">Price</Label>
        <Input id="unit_price" name="unit_price" type="number" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="product_type">Product Type</Label>
        <Input id="product_type" name="product_type" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="inventory">Inventory</Label>
        <Input id="inventory" type="number" name="inventory" required />
      </div>
      <div
        className="flex flex-col-reverse items-center justify-center image-input h-[200px]   gap-2 cursor-pointer rounded-[5px]"
        onClick={() => {
          const fileInput = document.querySelector(
            '.image-input-field'
          ) as HTMLInputElement;
          if (fileInput) {
            fileInput.click();
          }
        }}
      >
        {fileName == 'Browse Files To Upload' ? (
          <Label htmlFor="image">Browse Files To Upload</Label>
        ) : (
          <Label>
            <span className="flex align-center justify-center">
              {fileName}
              <MdDelete
                className="text-red-700 text-[1rem] cursor-pointer"
                onClick={() => {
                  setFileName('Browse Files To Upload');
                  setImage(null);
                }}
              />
            </span>
          </Label>
        )}

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
          <Image
            src={image}
            className="object-contain h-[80%] w-[80%]"
            width={90}
            height={90}
            alt={fileName}
          />
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
        <button
          type="submit"
          className="border-none bg-[#7fad39] text-white rounded-[7px] p-[2rem] pt-[1rem]  pb-[1rem] flex align-center gap-2 "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
