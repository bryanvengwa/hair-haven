import DashMiniHeader from "@/components/DashMiniHeader";
import CreateProductForm from '@/components/CreateProductForm';



export default function Page() {
  return (
    <div>
              <DashMiniHeader href="/admin/products" name="See Products"  />
              <div className="p-4">
              <CreateProductForm />
              </div>

      
    </div>
  )
}
