import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToasterPosition, ToastrMessageType } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETradeClient';
  constructor(private toastrService: CustomToastrService){
      toastrService.message("Merhaba", "Yamur", {
        messageType: ToastrMessageType.Info,
        position: ToasterPosition.TopCenter
      });
      toastrService.message("Merhaba", "Yamur",{
        messageType: ToastrMessageType.Warning,
        position: ToasterPosition.BottomLeft
      });
      toastrService.message("Merhaba", "Yamur", {
        messageType: ToastrMessageType.Error,
        position: ToasterPosition.TopCenter
      });
      toastrService.message("Merhaba", "Yamur", {
        messageType: ToastrMessageType.Success,
        position: ToasterPosition.TopCenter
      });


  }
  
}

