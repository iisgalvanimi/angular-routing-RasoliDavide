import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  obsTrack : Observable<Object>;
  spotify : SpotifyService;
  results : Object;
  query : String;
  constructor(spotify : SpotifyService){
    this.spotify = spotify;
    //this.obsTrack = this.spotify.searchTrack("lateralus");
    //this.obsTrack.subscribe((data)=>console.log((data['tracks'])['items']));
    
  } 
  ngOnInit() : void
  {}
  
  submit(query : HTMLInputElement): void
  {
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(query.value);
    this.obsTrack.subscribe((data) => {this.results = data; console.log((this.results['tracks'])['items'])});
  }

}
