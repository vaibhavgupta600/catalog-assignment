import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  selectedOption = new Subject<any>();
  selectedCard = new Subject<any>();

  saveToStorage(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  dataFromStorage(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }
  
  getTaskInfo(url) {
    return this.http.get(url).pipe(
      map((res: any) => {
        if (res[0].error !== {}) {
          return res;
        }
      })
    );
  }
}
