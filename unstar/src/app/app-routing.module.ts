import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component'
import { HomePageComponent } from './home-page/home-page.component'
import { MarsPictComponent } from './mars-pict/mars-pict.component'
import { AstronomiPictComponent } from './astronomi-pict/astronomi-pict.component'
import { FavoriteCollectionComponent } from './favorite-collection/favorite-collection.component'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'mars',
    component: MarsPictComponent
  },
  {
    path: 'astronomie',
    component: AstronomiPictComponent
  },
  {
    path: 'ma-collection',
    component: FavoriteCollectionComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
