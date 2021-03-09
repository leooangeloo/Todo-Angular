import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

//Similar to passing/creating an object and setting the attributes of an object in Java
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = "This is the welcome message"
  name = ''

  //ActivatedRoute to help with welcome/leooangeloo 
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

}

//Export indicates that this class can be accessible outside the module
export class Class1 {

}

export class Class2 {

}
