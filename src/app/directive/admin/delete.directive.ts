import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $: any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective extends BaseComponent {

  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private httClientService: HttpClientService,
    spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private alertifyService:AlertifyService)
     {
      super(spinner);
        const img = _renderer.createElement("img");
        img.setAttribute("src", "~/src/assets/delete.png");
        img.setAttribute("style", "cursor: pointer;");
        img.width= 25;
        img.height=25;

        _renderer.appendChild(element.nativeElement, img);
     }

     @Input() id: string;
     @Input() controller:string;
     @Output() callBack: EventEmitter<any> = new EventEmitter();

     @HostListener("click ")
    async  onclick(){
      this.openDialog(async () => {
        this.showSpinner(SpinnerType.BallAtom);
        const td: HTMLTableCellElement = this.element.nativeElement;
        //await this.productService.delete(this.id);
        this.httClientService.delete({
          controller:this.controller
        }, this.id).subscribe(data => {
          $(td.parentElement).animate({
            opacity:0,
            left:"+=50",
            height:"toogle"
          }, 700, () => {
            this.callBack.emit();
            this.alertifyService.message("Product deleted!", {
              dismissOthers:true,
              messageType: MessageType.Success,
              position:Position.TopRight
            })
            });
          },(errorResponse: HttpErrorResponse) => {
            this.hideSpinner(SpinnerType.BallAtom);
            this.alertifyService.message("Product cannot be deleted!", {
              dismissOthers:true,
              messageType: MessageType.Error,
              position:Position.TopRight
            })
          })
        });

      
      
      
     }
     openDialog(afterClosed: any): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: DeleteState.Yes,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result == DeleteState.Yes) {
          afterClosed();
        }
      });
    }
  }

