import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateProductForm() {
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
        <Input id="product_type" type='number' name="product_type" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="image">Image</Label>
        <Input id="iamge" type='file' name="image" required />
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
        <button className="border-none bg-[#7fad39] text-white rounded-[7px] p-[2rem] pt-[1rem]  pb-[1rem] flex align-center gap-2 " >Submit</button>
      </div>
    </div>
  );
}
