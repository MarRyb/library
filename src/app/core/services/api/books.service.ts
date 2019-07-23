import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public apiService: ApiService) { }
  
  getList(): Observable<any> {
    return this.apiService.get('Books');
  }
}
