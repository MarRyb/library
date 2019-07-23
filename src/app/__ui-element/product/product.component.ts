import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-book',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input() book;
  constructor() { }

  ngOnInit() {
  }

}
