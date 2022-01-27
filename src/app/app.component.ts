import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allowNewServer:boolean = false;
  serverStatus:string = "No server is online"
  fontSize:string = "bold"
  msg:string = ""

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  liveText(event: Event) {
    this.msg = (<HTMLInputElement>event.target).value;
  }

  createServer() {
    this.serverStatus = "Server is online"
  }

  stopServer() {
    this.serverStatus = "Server is offline"
  }
}
