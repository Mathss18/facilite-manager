import Link from "next/link";
import { Supplier } from "../../modules/supplier/interfaces/supplier.interface";
import supplierService from "../../modules/supplier/services/supplier.service";

export default async function Suppliers() {
  const { data } = await supplierService.getAll();

  return (
    <>
      <h1>Suppliers list</h1>
      {data.data.map((supplier: Supplier) => (
        <div key={supplier.id}>
          <h3>{supplier.companyName}</h3>
        </div>
      ))}
      <Link href="/suppliers/create">Suppliers Create</Link>
    </>
  );
}
