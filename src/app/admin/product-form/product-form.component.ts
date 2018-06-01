import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/category.service";
import { ProductService } from "src/app/product.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/take";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  category$;
  product = {};
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.category$ = categoryService.getCategories();

    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.productService
        .getProduct(id)
        .take(1)
        .subscribe(product => {
          console.log(product);
          this.product = product;
        });
    }
  }

  ngOnInit() {}

  save(product) {
    if ((<any>this.product)._id) {
      this.productService.update((<any>this.product)._id, product).subscribe();
    } else {
      this.productService.create(product).subscribe(res => console.log(res));
    }
    this.router.navigate(["/admin/products"]);
  }

  delete(id) {
    if (!confirm("Are you sure you want to delete the product?")) return;

    this.productService.delete(id);
    this.router.navigate(["/admin/products"]);
  }
}
