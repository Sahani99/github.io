import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  templateUrl: './how-to-order.component.html',
  styleUrls: ['./how-to-order.component.scss']
})
export class HowToOrderComponent implements OnInit {
  mainHeading = "HOW TO ORDER";
  paragraphHeading = "Explore Our Collection:";
  paragraphBody1 = 'Explore our wide range of trendy and stylish clothing for women and kids. Select the products that catch your eye, and add them to your cart.';
  paragraphHeading2 = "Proceed to Order:";
  paragraphBody2 = "Ready to make a purchase? Simply click Proceed to Order. You'll be redirected to our Messenger platform, where you can communicate with our team in real-time.";
  paragraphHeading3 ="Direct Message Your Details:";
  paragraphBody3 ="Once you've made your selections, send us a direct message with your order details. Include the product names, sizes, and any specific preferences you have. Our friendly team will assist you in finalizing your order.";
  paragraphHeading4 ="Place Your Order:";
  paragraphBody4 ="Confirm the details with our team, and they'll guide you through the order placement process. It's quick and easy!";
  paragraphHeading5 ="Secure Payment:";
  paragraphBody5 ="Complete your purchase securely using our trusted payment options within the Messenger platform. Your information is protected, ensuring a safe transaction.";
  paragraphHeading6 ="Track Your Delivery:";
  paragraphBody6 ="After payment, relax and await your stylish Volry fashion. We'll keep you updated on the delivery progress, and soon you'll receive your order at your doorstep.";
  paragraphHeading7 ="For any questions or assistance, our customer support team is just a message away. Thank you for choosing Volry, where ordering is as fashionable as our clothing!";
  constructor() { }

  ngOnInit(): void {
  }

}
