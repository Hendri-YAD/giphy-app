import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;

  @Output() newSearch = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  performSearch(){
    this.newSearch.next(this.searchForm.value.searchTerms);
    this.searchForm.resetForm();
  }

}
