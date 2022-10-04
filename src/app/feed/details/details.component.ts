import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces';
import { ItemsService } from '../items.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  itemId! : number;
  item$! : Observable<IItem>;

  constructor(
                private itemsService : ItemsService,
                private activatedRoute : ActivatedRoute,    // com esse serviço tenho acesso ao meu id
                private router : Router
 ) { }

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.params['id'];
    this.item$ = this.itemsService.searchById(this.itemId);
  }

  like(){
      this.itemsService.like(this.itemId)
      .subscribe((liked)=>{
       if(liked){
        this.item$ = this.itemsService.searchById(this.itemId)
       }
      });
  }
  delete(){
    this.itemsService.deleteItem(this.itemId)
    .subscribe(()=>{
      this.router.navigate(['/feed'])
    }, error => console.log(error));
  }

}
