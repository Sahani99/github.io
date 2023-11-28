import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  followeFb = "https://www.facebook.com/people/VOLRY/100091612668793/";
  followeInsta="https://instagram.com/v_o_l_r_y?igshid=MzMyNGUyNmU2YQ==";
  followTiktok="https://www.tiktok.com/@_volry_";
  followePinterest="https://www.pinterest.com/V_O_L_R_Y/";
  contactVolry="mailto:contactvolry@gmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}
