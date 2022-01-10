import { Category } from '@interfaces/category';
import { File } from '@interfaces/file';

export interface Product {
  id: number,
  category: Category,
  photo: File,
  title: string;
  slug: string;
  description: string;
  price: number;
  minimum_quantity: number;
  hidden: false;
  created: string;
  updated: string;
}
