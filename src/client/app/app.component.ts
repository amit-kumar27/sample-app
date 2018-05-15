import { Component } from '@angular/core';
import { Cookie } from "../../utils/cookie";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app',
  templateUrl:'./app.component.html'
})
export class App implements OnInit{

  constructor(private cookieService: Cookie) {

  }


  ngOnInit() {
    this.cookieService.put('name', 'am');
    console.log(this.cookieService.get('name'));
  }

}
