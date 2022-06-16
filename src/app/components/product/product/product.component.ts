import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productservice: ProductService) { }
  productlist : object
  ngOnInit(): void {
    this.productservice.productList().subscribe(data => {
      this.productlist = data.data
      console.log(this.productlist)
    })
  }

}
