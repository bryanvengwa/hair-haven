import { User, columns } from './columns'
import { DataTable } from "@/components/data-table"

async function getUsers() {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}

export default async function Page() {
  const data = await getUsers()
  return (
    <div> 
      <DataTable columns={columns} data={data}  />
      
    </div>
  )
}
