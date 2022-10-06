import { FooterModule } from './../components/footer/footer.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './details/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { NewPostComponent } from './new-post/new-post.component';


@NgModule({
  declarations: [
    ListComponent,
    CardImageComponent,
    GridPhotosComponent,
    DetailsComponent,
    CommentsComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HeaderModule,
    FooterModule,
    CardModule,
    SharedModule
  ]
})
export class FeedModule { }
