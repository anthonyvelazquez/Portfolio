import { Component, OnInit } from '@angular/core';
import '../../assets/utils.js'
declare var OpenAnimation: any;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    OpenAnimation.func1();
  }

}
