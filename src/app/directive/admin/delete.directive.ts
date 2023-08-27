import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
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
    private productService: ProductService,
    spinner: NgxSpinnerService,
    public dialog: MatDialog)
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
     @Output() callBack: EventEmitter<any> = new EventEmitter();

     @HostListener("click ")
    async  onclick(){
      this.openDialog(async () => {
        this.showSpinner(SpinnerType.BallAtom);
        const td: HTMLTableCellElement = this.element.nativeElement;
        await this.productService.delete(this.id);
        $(td.parentElement).animate({
          opacity:0,
          left:"+=50",
          height:"toogle"
        }, 700, () => {
          this.callBack.emit();

          });
        })
      
      
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


