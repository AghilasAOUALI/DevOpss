import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {
  }

  ngOnInit() {
    this.app.value=true;
  }

}
