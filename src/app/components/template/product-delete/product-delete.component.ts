import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product.model';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css',
})
export class ProductDeleteComponent {
  product: Product = {
    id: '',
    name: '',
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    if (!this.product.id) {
      this.router.navigate(['/products']);
      return;
    }

    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto removido com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
