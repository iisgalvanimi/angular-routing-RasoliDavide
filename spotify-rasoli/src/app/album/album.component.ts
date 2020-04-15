import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap>; 

  album : any; //Qui salverò la traccia selezionata
  spotifyServiceObs : Observable<Object>;
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: SpotifyService,
    public location : Location ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let albumId = params.get('id'); //Ottengo l'id dai parametri
    //console.log (albumId); //Stampo su console
    this.spotifyServiceObs = this.service.getAlbum(albumId) ;
    this.spotifyServiceObs.subscribe( (data) => this.album = data)
  }

  back() : void
  {
      this.location.back();
  }
  fromMStoM(ms : number) : String
  {
    let minuti = String(ms / 60000).split(".")[0];
    let secondi = (String(Number("0." + String(ms / 60000).split(".")[1]) * 0.6).split('.')[1]).substring(0,2);
    //Contorto e incomprensibile ma funziona
    return minuti + ":" + secondi;
  }
}
