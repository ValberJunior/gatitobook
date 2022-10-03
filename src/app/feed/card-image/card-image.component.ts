import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {

  constructor() { }

  private urlOriginal = '';

  @Input() desc = '';
  @Input() set url(url:string){
    if(url.startsWith('data')){
      this.urlOriginal = url
    }else{
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url():string{
    return this.urlOriginal;
  }

  ngOnInit(): void {
  }

}
