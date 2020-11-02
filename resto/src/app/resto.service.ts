import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';
  constructor(private http: HttpClient) {}
  // get the data
  getList() {
    return this.http.get(this.url);
  }
  //save the restaurant
  saveResto(data) {
    return this.http.post(this.url, data);
    //console.warn(data);
  }
  deleteResto(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrent(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
