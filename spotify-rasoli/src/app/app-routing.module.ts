import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { TrackComponent } from './track/track.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
