import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orderlist:any;

  constructor(private orderser: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderser.getOrders().subscribe((response: any) => {
      console.log("Got All Orders", response.data);
      this.orderlist = response.data;
    });
  }
  getShortDate(date:any){
    return date.split('T')[0]
  }
}
