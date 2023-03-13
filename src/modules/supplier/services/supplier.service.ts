import { api } from "../../../api/api";
import { CreateSupplierDto } from "../dtos/create-supplier.dto";
import { UpdateSupplierDto } from "../dtos/update-supplier.dto";

const supplierService = {
  getAll: () => api.get("/suppliers"),
  getOne: (id: number) => api.get(`/suppliers/${id}`),
  create: (data: CreateSupplierDto) => api.post("/suppliers", data),
  update: (id: number, data: UpdateSupplierDto) => api.put(`/suppliers/${id}`, data),
  delete: (id: number) => api.delete(`/suppliers/${id}`),
};

export default supplierService;
