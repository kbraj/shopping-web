import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/add/operator/map";
@Injectable({
  providedIn: "root"
})
export class CategoryService {
  baseUrl = "http://localhost:3000"
  constructor(private http: Http) {}


  getCategories() {
    return this.http
      .get(this.baseUrl + "/category")
      .map(res => res.json());
  }
}
