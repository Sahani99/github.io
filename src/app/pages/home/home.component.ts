import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
})
export class HomeComponent implements OnInit {
  cols = 4;
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined;
  count = '12';
  sort = 'asc';
  category: string | undefined;

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory === 'All Products' ? undefined : newCategory;
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
        return 0;
      }
    });
  }

  toggleSort(): void {
    if (this.sort === 'asc') {
      this.sort = 'desc';
    } else if (this.sort === 'desc') {
      this.sort = 'asc'; 
    } else if (this.sort === 'lowToHigh') {
      this.sort = 'highToLow'; 
    } else if (this.sort === 'highToLow') {
      this.sort = 'lowToHigh';
    } else {
      this.sort = 'asc'; 
    }
    this.sortProducts();
  }

//   isHandset$: Observable<boolean> = this.breakpointObserver
//   .observe(Breakpoints.Handset)
//   .pipe(map((result) => result.matches));

// constructor(private breakpointObserver: BreakpointObserver) {}
}
