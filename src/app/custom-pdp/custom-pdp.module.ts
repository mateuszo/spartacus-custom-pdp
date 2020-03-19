import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [CustomProductIntroComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent
        }
      }
    } as CmsConfig)
  ],
  entryComponents: [CustomProductIntroComponent]
})
export class CustomPdpModule { }
