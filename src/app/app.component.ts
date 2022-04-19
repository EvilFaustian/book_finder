import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiKey: string = "AIzaSyA2_iAbZSBm7NEpdBsUJ-vKuK6uX8JC1MM"
  searchInput: string = ""
  searching: boolean = false;
  loading: boolean = false;
  searchResult: any;

  
  title = 'book_finder';
  constructor(public http: HttpClient) {
    //this.http.get('https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=' + this.apiKey).subscribe(res => {
    //  console.log(res)
    //})
  }

  search() {
    let searchTerms = this.searchInput.replace(/\s/g, '+').trim().toLowerCase()
    if (this.searching) {
      //Do something if its searching already
    } else {
      this.searching = true;
      this.loading = true;
      this.searchResult = "";
      this.http.get(' https://www.googleapis.com/books/v1/volumes?q=' + searchTerms + '&key=' + this.apiKey).subscribe(res => {
        this.searchResult = res;
        this.loading = false;
        console.log("Search Result", this.searchResult);
        })
      setTimeout(() => {
        this.searching = false;
      }, 500)
    }
  }
}

