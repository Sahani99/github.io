import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailDialogComponent } from '../../product-detail-dialog/product-detail-dialog.component';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['product-box.component.scss'],
})
export class ProductBoxComponent implements OnInit, OnChanges {
  @Input() fullWidthMode = false;
  @Input() cols: number = 1;
  @Input() category: string | undefined;
  @Input() sort: string = 'asc';
  rowHeight = ROWS_HEIGHT[this.cols];
  products = [ 
            {id:1, name: 'VOL001', category: "Lady's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 1290, image: '../../../assets/products/l1.png' },
            {id:2, name: 'VOL002', category: "Baby's Wear", description: 'Another Product Description', price: 1100, image: '../../../assets/products/b1.jpg' },
            {id:3, name: 'VOL003', category: "Baby's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 990, image: '../../../assets/products/b2.jpg' },
            {id:4, name: 'VOL004', category: "Baby's Wear", description: 'Another Product Description', price: 890, image: '../../../assets/products/b3.jpg' },
            {id:5, name: 'VOL005', category: "Baby's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 1390, image: '../../../assets/products/b4.jpg' },
            {id:6, name: 'VOL006', category: "Baby's Wear", description: 'Another Product Description', price: 990, image: '../../../assets/products/b5.jpg' },
            {id:7, name: 'VOL007', category: "Baby's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 1290, image: '../../../assets/products/b6.jpg' },
            {id:8, name: 'VOL008', category: "Baby's Wear", description: 'Another Product Description', price: 1190, image: '../../../assets/products/b7.jpg' },
            {id:9, name: 'VOL009', category: "Baby's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 790, image: '../../../assets/products/b8.jpg' },
            {id:10, name: 'VOL010', category: "Baby's Wear", description: 'Another Product Description', price: 1000, image: '../../../assets/products/b9.jpg' },
            {id:11, name: 'VOL011', category: "Baby's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 1130, image: '../../../assets/products/b10.jpg' },
            {id:12, name: 'VOL012', category: "Accessories", description: 'Another Product Description', price: 250, image: '../../../assets/products/a1.jpg' },
            {id:13, name: 'VOL013', category: "Accessories", description: 'Blushing Blossom Pink Elegance Top', price: 300, image: '../../../assets/products/a2.jpg' },
            {id:14, name: 'VOL014', category: "Lady's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 1550, image: '../../../assets/products/l2.png' },
            {id:15, name: 'VOL015', category: "Lady's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 1600, image: '../../../assets/products/l3.png' },
            {id:16, name: 'VOL016', category: "Lady's Wear", description: 'Blushing Blossom Pink Elegance Top', price: 1220, image: '../../../assets/products/l4.png' },
            {id:17, name: 'VOLPR001', category: "Promotion Items", description: 'Old Price = 1000 LKR, 40% Discount', price: 600, image: '../../../assets/products/pr1.jpg' },
            {id:18, name: 'VOLSP001', category: "Special Items", description: '1 time used for ABC event by CDE', price: 20000, image: '../../../assets/products/sp1.jpg' },
   ];
  @Output() addToCart = new EventEmitter<Product>();

  constructor(public dialog: MatDialog) {}

  // constructor() {}

  ngOnInit(): void {
    this.sortProducts();
  }

  openProductDetailDialog(product: Product): void {
    this.dialog.open(ProductDetailDialogComponent, {
      data: { product },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sort']) {
      this.sortProducts();
    }
  }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }

   private sortProducts(): void {
    const currentSort = this.sort;
    this.products?.sort((a, b) => {
      if (currentSort === 'asc') {
        return a.id - b.id;
      } else if (currentSort === 'desc') {
        return b.id - a.id;
      } else if (currentSort === 'lowToHigh') {
        return a.price - b.price;
      } else if (currentSort === 'highToLow') {
        return b.price - a.price;
      } else {
        return 0; // No sorting
      }
    });
  }
}

