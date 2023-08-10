import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  constructor(private http: SharedService) {}

  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'member', 'actions'];

  ngOnInit() {
    this.getData();
  }
//All Clients - http://hmaapi.kilobytetech.com/users?pageNo=1&size=20
  //my localHost:4200 server dont have access to your api data it is throwing the CORS Policy error
  // so I just rendered data that i can access for example.
  getData() {
    this.http
      .getDataFromServer('b85ab61cf4d0a3c8b643')
      .subscribe((response: any) => {
        this.dataSource = response.item;
      });
  }
}
