import { Injectable } from '@angular/core';
import { IBlog } from '../Interfaces/iblogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
blogs:IBlog[]=[
  {
    title:'Unique products that will impress your home in 2022',
    img:"assets/Images/blogs/blog-1.jpg",
    place:'deco',
    date:'November 27, 2022',
    author:'Admin',
  },
  {
    title:'Navy Blue & White Striped Area Rugs',
    img:"assets/Images/blogs/blog-2.jpg",
    place:'deco',
    date:'November 25, 2022',
    author:'Admin',
  },
   {
    title:'Woodex White Coated Staircase Floating ',
    img:"assets/Images/blogs/blog-3.jpg",
    place:'deco',
    date:'November 18, 2022',
    author:'Admin',
  },
]
getblogs(){
  return this.blogs;
}
  constructor() { }
}
