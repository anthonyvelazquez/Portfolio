import { Component, OnInit } from '@angular/core';
import '../../assets/utils.js'
declare var OpenAnimation: any;

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    OpenAnimation.func1();
  }

}
