import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http,Headers,Response,RequestOptions} from '@angular/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
let url:any='http://localhost:3000'
  constructor(public navCtrl: NavController,private http:Http) {

  }

switchChange(state){
  console.log('state :: ',state)
this.callGetApi()}
  callGetApi(uri){
    
this.http.get(this.url+uri)
.subscribe((res:Response)=>{
console.log(res)      
},(err)=>{
console.log(err)
}) 
  }
}
