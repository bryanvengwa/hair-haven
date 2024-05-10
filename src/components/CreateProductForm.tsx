import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateProductForm() {
  return (
    <div>
      <div className='flex flex-col gap-2' >
      <Label htmlFor="picture">Product Name</Label>
      <Input id="picture" type="text" />
      </div>
    </div>
  )
}
