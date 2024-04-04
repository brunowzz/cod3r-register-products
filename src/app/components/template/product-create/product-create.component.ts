import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../interfaces/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  product: Product = {
    name: 'Produto',
    price: 25.99,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.product.price = Number(this.product.price);

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto adicionado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
