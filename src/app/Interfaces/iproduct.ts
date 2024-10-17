export interface IProduct {
  id:number
  image: string,
  name: string,
  oldPrice: string,
  newPrice: string,
  isoffered: boolean,
  scale: number,
  count?: number,
  Type: 'Decoration' | 'Accessory' | 'Furniture',
  amount:number
}
