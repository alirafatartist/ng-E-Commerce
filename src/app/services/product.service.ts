import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:IProduct[]= [
    {
      image:"assets/Images/products/product-1.jpg",
      name:'Animi Dolor Pariatur',
      oldPrice:'$19.00',
      newPrice:'$10.00',
      isoffered:true,
      scale:-10,
      count:20,
      Type:'Decoration',
      amount: 1
    },
    {
      image:"assets/Images/products/product-2.jpg",
      name:'Art Deco Home',
      oldPrice:'$30.00',
      newPrice:'$30.00',
      isoffered:false,
      scale:0,
      count:0,
      Type:'Accessory',
      amount: 1
    },
    {
      image:"assets/Images/products/product-3.jpg",
      name:'Artificial potted plant',
      oldPrice:'$40.00',
      newPrice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',
      amount: 1
    },
    {
      image:"assets/Images/products/product-4.jpg",
      name:'Dark Green Jug',
      oldPrice:'$17.10',
      newPrice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
      amount: 1
    },
    {
      image:"assets/Images/products/product-5.jpg",
      name:'Drinking Glasses',
      oldPrice:'$21.00',
      newPrice:'$21.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
      amount: 1
    },
    {
      image:"assets/Images/products/product-6.jpg",
      name:'Helen Chair',
      oldPrice:'$69.50',
      newPrice:'$69.50',
      isoffered:false,
      scale:0,
      Type:'Furniture',
      amount: 1
    },
    {
      image:"assets/Images/products/product-7.jpg",
      name:'Artificial potted plant',
      oldPrice:'$40.00',
      newPrice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',
      amount: 1
    },
    {
      image:"assets/Images/products/product-8.jpg",
      name:'High Quality Glass Bottle',
      oldPrice:'$30.10',
      newPrice:'$30.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
      amount: 1
    }, {
      image:"assets/Images/products/product-9.jpg",
      name:'Living Room & Bedroom Lights',
      oldPrice:'$45.00',
      newPrice:'$45.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
      amount: 1
    }, {
      image:"assets/Images/products/product-10.jpg",
      name:'Nancy Chair',
      oldPrice:'$90.00',
      newPrice:'$90.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
      amount: 1
    }, {
      image:"assets/Images/products/product-11.jpg",
      name:'Simple Chair',
      oldPrice:'$40.00',
      newPrice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
      amount: 1
    }, {
      image:"assets/Images/products/product-12.jpg",
      name:'Smooth Disk',
      oldPrice:'$64.00',
      newPrice:'$64.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',
      amount: 1
    },
    {
      image:"assets/Images/products/product-13.jpg",
      name:'Table Black',
      oldPrice:'$67.00',
      newPrice:'$67.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
      amount: 1
    },
    {
      image:"assets/Images/products/product-14.jpg",
      name:'Table Wood Pine',
      oldPrice:'$ 50.00',
      newPrice:'$ 50.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
      amount: 1
    },
    {
      image:"assets/Images/products/product-15.jpg",
      name:'Teapot with black tea',
      oldPrice:'$25.00',
      newPrice:'$25.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
      amount: 1
    },
    {
      image:"assets/Images/products/product-16.jpg",
      name:'Wood Eggs',
      oldPrice:'$77.00',
      newPrice:'$77.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
      amount: 1
    },
    {
      image:"assets/Images/products/product-17.jpg",
      name:'Wooden Box',
      oldPrice:'$19.00',
      newPrice:'$19.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',
      amount: 1
    },
    {
      image:"assets/Images/products/product-18.jpg",
      name:'Wooden Box',
      oldPrice:'$27.00 ',
      newPrice:'$27.00 ',
      isoffered:false,
      scale:0,
      Type:'Furniture',
      amount: 1
    },
    {
      image:"assets/Images/products/product-19.jpg",
      name:'Vase Of Flowers',
      oldPrice:'$15.00',
      newPrice:'$15.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',
      amount: 1
    },
  ]

  getProducts(){
    return this.products;
  }

  constructor() { }
}
