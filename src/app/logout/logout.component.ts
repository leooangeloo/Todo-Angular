import { HardcodeAuthService } from './../service/hardcode-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardcodeAuthService : HardcodeAuthService) { }

  ngOnInit(): void {
    this.hardcodeAuthService.logout();
  }

}
