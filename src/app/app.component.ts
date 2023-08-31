import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrPosition, ToastrMessageType } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETradeClient';
  constructor(){
     
  }
  
}


$.get("https://localhost:7177/api/products", data => {
  console.log(data)
})
