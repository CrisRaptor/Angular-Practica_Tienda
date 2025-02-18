import { Garantia } from "./garantia";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    caracteristicas: string[];
    garantia: Garantia;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      stock: 20,
      caracteristicas: ["5G","Pantalla OLED", "Almacenamiento de 128GB"],
      garantia: {
        periodo: "2 años",
        tipo: "Fabricante"
      }
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      stock: 20,
      caracteristicas: ["4G", "Almacenamiento de 64GB"],
      garantia: {
        periodo: "1 año",
        tipo: "Fabricante"
      }
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      stock: 2,
      caracteristicas: ["5G","Pantalla LED", "Almacenamiento de 128GB"],
      garantia: {
        periodo: "2 años",
        tipo: "Fabricante"
      }
    },
    {
      id: 4,
      name: 'Phone 1994 (Obsolete)',
      price: 299,
      description: '',
      stock: 0,
      caracteristicas: ["Almacenamiento de 16GB"],
      garantia: {
        periodo: "2 años",
        tipo: "Fabricante"
      }
    }
  ];