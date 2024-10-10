import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:any[]= [
    {
      image:"assets/Images/products/product-1.jpg",
      name:'Animi Dolor Pariatur',
      oldPrice:'$19.00',
      newPice:'$10.00',
      isoffered:true,
      scale:-10,
      count:20,
      Type:'Decoration',
    },
    {
      image:"assets/Images/products/product-2.jpg",
      name:'Art Deco Home',
      oldPrice:'$300.00',
      newPice:'$300.00',
      isoffered:false,
      scale:0,
      count:0,
      Type:'Accessory',

    },
    {
      image:"assets/Images/products/product-3.jpg",
      name:'Artificial potted plant',
      oldPrice:'$40.00',
      newPice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',

    },
    {
      image:"assets/Images/products/product-4.jpg",
      name:'Dark Green Jug',
      oldPrice:'$17.10',
      newPice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
    },
    {
      image:"assets/Images/products/product-5.jpg",
      name:'Drinking Glasses',
      oldPrice:'$21.00',
      newPice:'$21.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
    },
    {
      image:"assets/Images/products/product-6.jpg",
      name:'Helen Chair',
      oldPrice:'$69.50',
      newPice:'$69.50',
      isoffered:false,
      scale:0,
      Type:'Furniture',
    },
    {
      image:"assets/Images/products/product-7.jpg",
      name:'Artificial potted plant',
      oldPrice:'$40.00',
      newPice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',

    },
    {
      image:"assets/Images/products/product-8.jpg",
      name:'High Quality Glass Bottle',
      oldPrice:'$30.10',
      newPice:'$30.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
    }, {
      image:"assets/Images/products/product-9.jpg",
      name:'Living Room & Bedroom Lights',
      oldPrice:'$45.00',
      newPice:'$45.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
    }, {
      image:"assets/Images/products/product-10.jpg",
      name:'Nancy Chair',
      oldPrice:'$90.00',
      newPice:'$90.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
    }, {
      image:"assets/Images/products/product-11.jpg",
      name:'Simple Chair',
      oldPrice:'$40.00',
      newPice:'$40.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
    }, {
      image:"assets/Images/products/product-12.jpg",
      name:'Smooth Disk',
      oldPrice:'$64.00',
      newPice:'$64.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',

    },
    {
      image:"assets/Images/products/product-13.jpg",
      name:'Table Black',
      oldPrice:'$67.00',
      newPice:'$67.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
    },
    {
      image:"assets/Images/products/product-14.jpg",
      name:'Table Wood Pine',
      oldPrice:'$ 50.00',
      newPice:'$ 50.00',
      isoffered:false,
      scale:0,
      Type:'Furniture',
    },
    {
      image:"assets/Images/products/product-15.jpg",
      name:'Teapot with black tea',
      oldPrice:'$25.00',
      newPice:'$25.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
    },
    {
      image:"assets/Images/products/product-16.jpg",
      name:'Wood Eggs',
      oldPrice:'$77.00',
      newPice:'$77.00',
      isoffered:false,
      scale:0,
      Type:'Accessory',
    },
    {
      image:"assets/Images/products/product-17.jpg",
      name:'Wooden Box',
      oldPrice:'$19.00',
      newPice:'$19.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',

    },
    {
      image:"assets/Images/products/product-18.jpg",
      name:'Wooden Box',
      oldPrice:'$27.00 ',
      newPice:'$27.00 ',
      isoffered:false,
      scale:0,
      Type:'Furniture',
    },
    {
      image:"assets/Images/products/product-19.jpg",
      name:'Vase Of Flowers',
      oldPrice:'$15.00',
      newPice:'$15.00',
      isoffered:false,
      scale:0,
      Type:'Decoration',
    },
  ]
  getProducts(){
    return this.products;
  }

  constructor() { }
}