import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  http : HttpClient;
  headers : HttpHeaders;
  constructor(http: HttpClient) { 
    this.http = http;
    this.headers = new HttpHeaders({
      Authorization: environment.oauthToken
    });
  }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;


    let obsTracks = this.http.get(url, { headers : this.headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    
    return this.http.get(url, { headers : this.headers });
  }
  getAlbum(id : string)
  {
    const url = `https://api.spotify.com/v1/albums/${id}`;

    return this.http.get(url, {headers : this.headers});
  }
  getArtist(id : string)
  {
    const url = `https://api.spotify.com/v1/artists/${id}`;

    return this.http.get(url, {headers : this.headers});
  }
} 