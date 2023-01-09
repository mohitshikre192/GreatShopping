export class Product {
  id: number;
  title: string;
  purchase_price: number;
  saleprice: number;
  currentstock: number;
  featured: boolean;
  tax: number;
  brandid: number;
  processor: string;
  ram: number;
  rom: number;
  primarycamera: number;
  frontcamera: number;
  battery: number;
  img_url: string;


  constructor() {
    this.id = 0;
    this.title="";
    this.purchase_price=0;
    this.saleprice= 0;
    this.currentstock = 0;
    this.featured = false;
    this.tax = 0;
    this.brandid = 0;
    this.processor="";
    this.ram = 0;
    this.rom = 0;
    this.primarycamera = 0;
    this.frontcamera = 0;
    this.battery = 0;
    this.img_url="";
  }
}
