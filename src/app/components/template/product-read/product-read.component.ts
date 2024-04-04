import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
})
export class ProductReadComponent {
  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.readProduct().subscribe((product) => {
      this.products = product;
    });
  }
}
