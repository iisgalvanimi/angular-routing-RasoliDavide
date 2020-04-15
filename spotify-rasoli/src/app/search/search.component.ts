import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  routeObs: Observable<ParamMap>; 
  obsTrack : Observable<Object>;
  spotify : SpotifyService;
  results : Object;
  query : String;
  constructor(    
    private route: ActivatedRoute, 
    private router: Router, 
    spotify: SpotifyService)
    {
      this.spotify = spotify;
    } 
  ngOnInit() : void
  {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    console.log("chiamata");
    let toSearch = params.get('toSearch'); 
    if(toSearch != undefined)
    {
      this.obsTrack = this.spotify.searchTrack(toSearch);
      this.obsTrack.subscribe(data => {console.log(data); this.results = data})
    }
  }

  submit(htmlInput : HTMLInputElement): void
  {
    let query = "search/" + htmlInput.value;
    this.router.navigate([query]);
  }
}
