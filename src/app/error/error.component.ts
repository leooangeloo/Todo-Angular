import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMess = "An error occured. Contact your system administrator. Either the site does not exist or it cannot be loaded."

  constructor() { }

  ngOnInit(): void {
  }


}
