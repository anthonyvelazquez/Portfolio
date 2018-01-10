import { Component, OnInit } from '@angular/core';
import '../../assets/utils.js'
declare var OpenAnimation: any;


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    OpenAnimation.func1();
  }

}
