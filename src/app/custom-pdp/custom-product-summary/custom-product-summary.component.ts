import { Component, OnInit } from '@angular/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { Product } from '@spartacus/core';

@Component({
  selector: 'app-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrls: ['./custom-product-summary.component.scss']
})
export class CustomProductSummaryComponent implements OnInit {
  product$: Observable<Product> = this.currentProductService.getProduct();
  iconTypes = ICON_TYPE;

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
