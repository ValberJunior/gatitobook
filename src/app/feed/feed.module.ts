import { FooterModule } from './../components/footer/footer.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';


@NgModule({
  declarations: [
    ListComponent,
    CardImageComponent,
    GridPhotosComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HeaderModule,
    FooterModule,
    CardModule
  ]
})
export class FeedModule { }
