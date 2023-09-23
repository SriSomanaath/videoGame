import { Component , OnDestroy, OnInit } from '@angular/core';
import { APIResponse, Game } from 'src/app/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort: string;
  public games: Array<Game>;
  
  constructor() { }

  ngOnInit(): void {

  }

}
