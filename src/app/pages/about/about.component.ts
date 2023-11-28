import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  paragraphHead = "ABOUT US";
  paragraphBody = "Volry is an online clothing store that offers a wide range of trendy and stylish clothing for women and kids ❤️ We are passionate about providing you with high-quality clothing that is comfortable, fashionable, and affordable for you and your little ones ❤️ Our collection includes a variety of sizes, styles, and colors to suit different ages, occasions, and preferences.";
  paragraphHead2 ="CONTACT US";
  contactMail ="mailto:contact@volry.xyz";
  contactFb = "https://www.facebook.com/people/VOLRY/100091612668793/";
  contactInsta="https://instagram.com/v_o_l_r_y?igshid=MzMyNGUyNmU2YQ==";
  constructor() { }

  ngOnInit(): void {
  }

}
