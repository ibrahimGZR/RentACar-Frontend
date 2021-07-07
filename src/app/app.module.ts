import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { CarImageListComponent } from './components/car-image-list/car-image-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalDeleteComponent } from './components/rental-delete/rental-delete.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './interceptors/auth.interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    CarComponent,
    CarDetailComponent,
    ColorPipePipe,
    BrandPipePipe,
    FilterPipePipe,
    VatAddedPipe,

    RentalAddComponent,
    BrandAddComponent,
    BrandDeleteComponent,
    BrandListComponent,
    BrandUpdateComponent,
    CarAddComponent,
    CarDeleteComponent,
    CarImageAddComponent,
    CarImageListComponent,
    CarListComponent,
    CarUpdateComponent,
    CartSummaryComponent,
    ColorAddComponent,
    ColorDeleteComponent,
    ColorListComponent,
    ColorUpdateComponent,
    ProfileUpdateComponent,
    LoginComponent,
    RegisterComponent,
    RentalDeleteComponent,
    RentalListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
