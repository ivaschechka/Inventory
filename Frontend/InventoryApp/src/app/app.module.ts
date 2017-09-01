import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// Guards
import { AuthGuard } from './shared/guards/auth-guard.service';
// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
// Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdAutocompleteModule } from '@angular/material';
// Services
import { AuthService } from './authentication/auth.service';
import { StorageService } from './core/storage.service';
// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { CategoryItemComponent } from './home/categories/category-item/category-item.component';
import { CategoriesModule } from './home/categories/categories.module';
import { DeliveryComponent } from './home/delivery/delivery.component';
import { DeliveryFormComponent } from './home/delivery/delivery-form/delivery-form.component';
import { DispatchFormComponent } from './home/delivery/dispatch-form/dispatch-form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Custom modules
    CoreModule,
    SharedModule,
    AuthenticationModule,
    CategoriesModule,

    // Routing
    AppRoutingModule,

    // Angular materials
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    StatisticsComponent,
    DeliveryComponent,
    DeliveryFormComponent,
    DispatchFormComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
