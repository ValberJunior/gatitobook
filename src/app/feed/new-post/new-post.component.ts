import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  formItem! : FormGroup;
  file! : File;
  preview! : string;
  percentage : number = 0;

  constructor(
               private itemsService : ItemsService,
               private formBuilder : FormBuilder,
               private router : Router
              ) { }

  ngOnInit(): void {
    this.formItem = this.formBuilder.group({
      file: ['',Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload(){
    const allowComments =
     this.formItem.get('allowComments')?.value ?? false;
    const description = this.formItem.get('description')?.value ?? '';
    this.itemsService
    .upload(description,allowComments,this.file)
    .pipe( finalize(()=> this.router.navigate(['feed'])))
      .subscribe(
        (event:HttpEvent<any>)=>{
      if (event.type === HttpEventType.UploadProgress){
        const total = event.total ?? 1;
        this.percentage = Math.round(100*(event.loaded / total));
      }
    }, (error:any) => console.log(error)
    );
  }

  saveFile(newFile:any) :void{
    const [file] = newFile?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event:any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
