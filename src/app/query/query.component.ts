import { Component, OnInit } from '@angular/core';
import * as mockdata from '../mockdata.json';
import { Data } from '../value';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  public Data;

  constructor() { }

  ngOnInit(): void {
    
  }

  newQuery(data){

    this.Data.push( data)

  }

}
