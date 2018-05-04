import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl:'./root.component.html',
//  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  // styleUrls:["./../static/styles/reset.scss'),
  //   require('./../static/styles/base.scss'),require('./../static/styles/common.scss'),
  //   require('./../static/styles/grid.scss'),require('./../static/styles/utilities.scss'), require('./../static/styles/font.scss"],
  //encapsulation: ViewEncapsulation.None
})
export class Root implements OnInit{
  ngOnInit(){
    
  }
}


