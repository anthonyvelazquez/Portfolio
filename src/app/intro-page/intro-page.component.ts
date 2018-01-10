import { Component, OnInit } from '@angular/core';
import '../../assets/utils.js'
declare var OpenAnimation: any;

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    OpenAnimation.func1();
  }

}
