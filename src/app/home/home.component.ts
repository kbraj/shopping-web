import { CategoryService } from "src/app/category.service";
import { ProductService } from "src/app/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products;
  category$;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.productService
      .getAll()
      .subscribe(products => (this.products = products));

    this.category$ = this.categoryService.getCategories();
  }

  filterByCategory(category) {
    if (category) {
      this.productService
        .getByCategory(category)
        .subscribe(products => this.products = products);
    } else {
      this.productService
        .getAll()
        .subscribe(products => this.products = products);
    }
  }
}
