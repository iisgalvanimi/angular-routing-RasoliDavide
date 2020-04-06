import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-rasoli';
  obsTrack : Observable<Object>;
  spotify : SpotifyService;
  results : Object;
  query : String;
  constructor(spotify : SpotifyService){
    this.spotify = spotify;
    //this.obsTrack = this.spotify.searchTrack("lateralus");
    //this.obsTrack.subscribe((data)=>console.log((data['tracks'])['items']));
    
  } 
  submit(query : HTMLInputElement): void
  {
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(query.value);
    this.obsTrack.subscribe((data) => {this.results = data; console.log((this.results['tracks'])['items'])});
  }
}
