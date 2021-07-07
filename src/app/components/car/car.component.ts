import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { RentalNormal } from 'src/app/models/rentalNormal';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  defaultPath = 'https://localhost:44349';
  rentals: RentalNormal[] = [];
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  dataLoaded = false;
  filterText = '';
  filterBrandId: number = 0;
  filterColorId: number = 0;
  car: Car;
  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private carImageService: CarImageService,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private cartService: CartService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllColors();
    this.getRentals();
    this.activedRoute.params.subscribe((params) => {
      if(params['brandId'] && params['colorId']){
        this.getCarDetailByBrandAndColor(params['brandId'],params['colorId']);
      }
      else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getAllColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getCarDetailByBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        console.log(response);
        this.cars = response.data;
        this.dataLoaded = true;
      });
  }
  getSelectedBrand(brandId: number) {
    if (this.filterBrandId == brandId) {
      return true;
    } else {
      return false;
    }
  }
  getSelectedColor(colorId: number) {
    if (this.filterColorId == colorId) {
      return true;
    } else {
      return false;
    }
  }
}
