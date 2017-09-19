import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
// Pipes
import { FilterPipe } from '../../infrastructure/filter.pipe';
// Angular materials
import { MdInputModule, MdAutocompleteModule, MdButtonModule, MdDialogModule, MdTableModule, MdPaginatorModule } from '@angular/material';
// Services
import { WaybillService } from './waybill/waybill.service';
// Components
import { CategoryItemComponent } from './categories-home/category-item/category-item.component';
import { CategoriesComponent } from './categories.component';
import { WaybillComponent } from './waybill/waybill.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    RouterModule,

    // Angular materials
    MdInputModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdDialogModule,
    MdTableModule,
    MdPaginatorModule,
  ],
  declarations: [
    // Pipes
    FilterPipe,
    // Components
    CategoryItemComponent,
    CategoriesComponent,
    WaybillComponent,
    ProductsComponent,
    ProductItemComponent,
    CategoriesHomeComponent
  ],
  entryComponents: [  ],
  providers: [
    WaybillService
  ]
})
export class CategoriesModule { }
