import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  List = [];
  constructor(private Api: ApiService) {}

  ngOnInit(): void {
    this.Api.getTaskInfo(
      'https://6005412375860e0017c5c3c5.mockapi.io/categories'
    ).subscribe((data) => {
      this.List = data[0].data.locations;
    });
  }
  cityData(event) {
    this.Api.saveToStorage('category-details', event);
  }
}
