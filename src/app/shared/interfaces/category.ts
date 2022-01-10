import { File } from '@interfaces/file';

export interface Category {
  id: number,
  products_count: number,
  name: string,
  description: string,
  photo?: File,
  parent: number
}
