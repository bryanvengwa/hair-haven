import DashMiniHeader from "@/components/DashMiniHeader";
import CreateProductForm from '@/components/CreateProductForm';



export default function Page() {
  return (
    <div>
              <DashMiniHeader href="/admin/products" name="See Products"  />
              <CreateProductForm />

      
    </div>
  )
}
