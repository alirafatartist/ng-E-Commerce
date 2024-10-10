export interface IProduct {
  image: string,
  name: string,
  oldPrice: string,
  newPrice: string,
  isoffered: boolean,
  scale: number,
  count?: number,
  Type: 'Decoration' | 'Accessory' | 'Furniture',
}
