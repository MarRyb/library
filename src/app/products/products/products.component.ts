import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/api/books.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  public book$: any = {};
  constructor(private books: BooksService) { this.book$ = books.getList(); }

  ngOnInit() {
  }

}
