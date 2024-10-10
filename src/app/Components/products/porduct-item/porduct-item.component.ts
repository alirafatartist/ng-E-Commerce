import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-porduct-item',
  templateUrl: './porduct-item.component.html',
  styleUrl: './porduct-item.component.scss'
})
export class PorductItemComponent {
  @Input({required:true})prd:any;
}
