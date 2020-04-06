import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  http : HttpClient;
  constructor(http: HttpClient) { 
    this.http = http;
  }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBeIA2xjeMAJIvxyp4grkByurRoRaGz-5kaTwDAiQ5dLsi97otbqcSMx5LxC2VZP5N9dXU5Bxw_u069F3h7CN8pwkhq0ZfkrenyeLpTJu-drR_V_zjnmXr6IR5p8TWZL1LReiOhZKEEyFzR3WT2OHh_wPvaKrU81igKoluPJY6zJl_XndI1zs_7hFZ-PVl96MpLtouZEOLmkB4_kszR3G0O_O0i6Tykt8M3rYGpwdCeGYnbRBO3gUVps8WTlmRDHnBeWy9oSADZ4w'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
} 