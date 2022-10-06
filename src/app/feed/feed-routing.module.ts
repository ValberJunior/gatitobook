import { FooterModule } from './../components/footer/footer.module';
import { HeaderModule } from './../components/header/header.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResolver } from './list/list.resolver';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {
    path:'',
    component: ListComponent,
    resolve: {
      items : ListResolver
    }
  },
  {
    path:'newPost',
    component: NewPostComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HeaderModule, FooterModule],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
