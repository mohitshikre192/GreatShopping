export class Customer {

  id: number;
  Cust_Name: string;
  Phone: string;
  Email: string;
  Cust_Address: string;
  City: string;
  State_: string;
  Pincode: string;
  DOB: Date;
  Cust_Password: string;
  

  constructor() {
    this.id = 0;
    this.Cust_Name = "";
    this.Cust_Address = "";
    this.Phone = "";
    this.Email = "";
    this.City = "";
    this.State_ = "";
    this.Pincode ="";
    this.DOB= new Date();
    this.Cust_Password = "";
  }
}
