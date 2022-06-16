import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductComponent,
    SearchPipe],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
