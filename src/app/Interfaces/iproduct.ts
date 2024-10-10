export interface IProduct {
  image: string;
  name: string;
  oldPrice: string;
  newPice: string;
  isoffered: boolean;
  scale: number;
  count?: number; 
  Type: 'Decoration' | 'Accessory' | 'Furniture';
}
