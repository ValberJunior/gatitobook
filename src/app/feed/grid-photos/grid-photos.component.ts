import { Component, Input, OnInit } from '@angular/core';
import { Items } from 'src/utils';

@Component({
  selector: 'app-grid-photos',
  templateUrl: './grid-photos.component.html',
  styleUrls: ['./grid-photos.component.scss']
})
export class GridPhotosComponent implements OnInit {

  @Input() items! : Items;

  constructor() { }

  ngOnInit(): void {
  }

}
