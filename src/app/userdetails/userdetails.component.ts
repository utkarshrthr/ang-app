import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WebService } from "../services/web.service";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute, public webService: WebService) {}

  userData = null;

  ngOnInit() {
    this.userData = this.webService.posts
      .getValue()
      .find((d) => String(d.userId) == this._route.snapshot.params["id"]);
  }
}
