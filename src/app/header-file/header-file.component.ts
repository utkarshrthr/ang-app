import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WebService } from "../services/web.service";

@Component({
  selector: 'app-header-file',
  templateUrl: './header-file.component.html',
  styleUrls: ['./header-file.component.css']
})
export class HeaderFileComponent implements OnInit {

  constructor(private _route: ActivatedRoute, public webService: WebService) {}

  ngOnInit() {
  }

}
