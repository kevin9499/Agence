import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-from-storage',
  templateUrl: './list-from-storage.component.html',
  styleUrls: ['./list-from-storage.component.css']
})
export class ListFromStorageComponent implements OnInit {
  @Input() pictList: []
  @Input() from: string
  image_src: string
  modalVisible: boolean

  constructor() { }

  ngOnInit(): void {
    console.log(this.pictList)
  }

  openPictureModal(image_link: string) {
    this.image_src = image_link;
    this.modalVisible = true;
  }

  closePictureModal() {
    this.image_src = "";
    this.modalVisible = false;
  }
}
