import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  baseUrl = "http://localhost:3000";
  constructor(private http: Http) {}

  create(product) {
    return this.http.post(this.baseUrl + "/product", product);
  }

  getAll() {
    return this.http.get(this.baseUrl + "/product").map(res => res.json());
  }

  getProduct(id) {
    return this.http
      .get(`${this.baseUrl}/product/${id}`)
      .map(res => res.json());
  }

  delete(id) {
    this.http.delete(`${this.baseUrl}/product/${id}`).subscribe();
  }

  update(id, product) {
    return this.http.put(`${this.baseUrl}/product/${id}`, product);
  }

  getByCategory(category){
    return this.http.get(`${this.baseUrl}/product/getProductByCategory/${category}`).map(res => res.json());
  }
}
