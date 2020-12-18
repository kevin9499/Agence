import { Component, OnInit } from '@angular/core';
import { FetchnasaapiService } from '../services/fetchnasaapi.service'

@Component({
  selector: 'app-mars-pict',
  templateUrl: './mars-pict.component.html',
  styleUrls: ['./mars-pict.component.css']
})
export class MarsPictComponent implements OnInit {
  isLoadingMarsPict = false;
  marsPict: [] = [];
  dateFormat ='yyyy-MM-dd';
  date: Date | null;

  constructor(
    private _marsApi: FetchnasaapiService
  ) { }

  ngOnInit(): void {
  }

  onDateChange() {
    if (this.date != null) {
      this.isLoadingMarsPict = true;
      this._marsApi.getMarsImagesFromAPI(this.date.toISOString().slice(0, 10))
        .subscribe((data: any) => {
          this.marsPict = data.photos;
          this.isLoadingMarsPict = false;
          console.log(this.marsPict)
        })
    } else {
      this.marsPict = [];
    }
  }
}
