import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-collection',
  templateUrl: './favorite-collection.component.html',
  styleUrls: ['./favorite-collection.component.css']
})
export class FavoriteCollectionComponent implements OnInit {
  pictList: []
  from = 'mars'

  constructor() { }

  ngOnInit(): void {
    let storage = JSON.parse(window.localStorage.getItem('fav_pict'));
    if (storage != null) {
      if (this.from === 'astronomie') {
        this.from = 'mars'
        this.pictList = []
        this.pictList = storage.picture.astronomie
      } else if (this.from === 'mars') {
        this.from = 'astronomie'
        this.pictList = []
        this.pictList = storage.picture.mars
      }
    } else {
      this.pictList = []
    }
  }

  loadFromLocal() {
    let storage = JSON.parse(window.localStorage.getItem('fav_pict'));
    if (storage != null) {
      if (this.from === 'astronomie') {
        this.from = 'mars'
        this.pictList = []
        this.pictList = storage.picture.astronomie
      } else if (this.from === 'mars') {
        this.from = 'astronomie'
        this.pictList = []
        this.pictList = storage.picture.mars
      }
    } else {
      this.pictList = []
    }
    console.log(this.pictList)
  }
}
