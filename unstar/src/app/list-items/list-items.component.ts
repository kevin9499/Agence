import { Component, OnInit, Input } from '@angular/core';

interface ImageData {
  from: string;
  img: string;
}

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  @Input() imageList: [];
  @Input() isLoading: boolean;
  @Input() from: string;
  image_src: string;
  modalVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPictureModal(image_link: string) {
    this.image_src = image_link;
    this.modalVisible = true;
  }

  closePictureModal() {
    this.image_src = "";
    this.modalVisible = false;
  }

  saveToFav(image_data: ImageData) {
    image_data = { ...image_data, from: this.from }
    console.log(image_data)
    let storage = JSON.parse(window.localStorage.getItem('fav_pict'));
    if (storage == null) storage = {
      picture: {
        mars: [],
        astronomie: []
      }
    };
    if (image_data.from === 'mars') {
      storage.picture.mars.push(image_data)
    } else if (image_data.from === 'astronomie') {
      storage.picture.astronomie.push(image_data)
    }
    window.localStorage.setItem('fav_pict', JSON.stringify(storage))
  }
}
