import { BlogService } from './../../services/blog.service';
import { Component } from '@angular/core';
import { IBlog } from '../../Interfaces/iblogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  constructor(
    private blogServices:BlogService,
  ){}
blogs:IBlog[]=[];
ngOnInit(): void {
this.blogs=this.blogServices.getblogs();
}
}
