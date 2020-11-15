import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchUser:string;
  @Output() findUserEmitter= new EventEmitter<any>();
  constructor() { }
showUser(){
  this.findUserEmitter.emit(this.searchUser);
}


  ngOnInit(): void {
  }

}
