import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response, RequestOptions } from '@angular/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: any = 'http://172.20.5.29:3030/';
  currentState: any
  constructor(public navCtrl: NavController, private http: Http) {
    this.currentState = 'No Status';

  }

  switchChange(state) {
    console.log('state :: ', state)
    this.callGetApi(state)
  }
  callGetApi(uri) {

    this.http.get(this.url + uri)
      .subscribe((res: Response) => {
        console.log(res)
        this.loadStatus()
      }, (err) => {
        console.log(err)
      })
  }
  ionViewDidLoad() {
    this.loadStatus()
  }
  loadStatus(){
    let self =this;
    this.http.get(this.url + 'mobile/status')
      .subscribe((res: Response) => {
        console.log(res)
        self.currentState = JSON.parse(res._body).status
      }, (err) => {
        console.log(err)
      })
  }
}