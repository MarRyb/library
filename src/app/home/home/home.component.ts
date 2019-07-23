import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/api/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public book: any = [];
  constructor(private books: BooksService) { 
    books.getList().subscribe(data => {
      return this.book = data;
    },
    error => {
      alert('Произошла внутрення ошибка!');
    });
  }

  ngOnInit() {
  }

}
