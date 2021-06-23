import { CarDetail } from "./carDetail";

export interface RentalDetail {
  id: number;
  carDto:CarDetail;
  customerDto:CustomerDetail;
  rentDate: Date;
  returnDate: Date;
}
