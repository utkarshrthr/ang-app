import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WebService } from "../services/web.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: ActivatedRoute, public webService: WebService) {}

  ngOnInit() {
  }

}
