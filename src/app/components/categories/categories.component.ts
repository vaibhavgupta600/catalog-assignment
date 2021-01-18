import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  allCategories: any;
  data: any;
  constructor(private Api: ApiService) {
    this.data = this.Api.dataFromStorage('category-details');
  }

  ngOnInit(): void {
    this.allCategories = [];
    if (this.data) {
      if (this.data.dealers_id) {
        this.allCategories = this.data.branches;
      } else {
        this.allCategories.push(this.data);
      }
    }
  }
  subcategory(item: any) {
    this.Api.saveToStorage('subcategory-details', item);
  }
}
