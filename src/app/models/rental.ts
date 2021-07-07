import { Car } from "./car";
import { Customer } from "./customer";

export interface Rental {
  id: number;
  carDto:Car;
  customerDto:Customer;
  rentDate: Date;
  returnDate: Date;
}
