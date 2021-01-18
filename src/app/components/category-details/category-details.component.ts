import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  data: any;
  constructor(private Api: ApiService) {
    this.data = this.Api.dataFromStorage('subcategory-details');
  }
  subcategory: any;
  ngOnInit(): void {
    this.subcategory = [];
    if (this.data) {
      this.subcategory.push(this.data);
    }
  }
}
