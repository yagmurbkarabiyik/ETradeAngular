import { Create_Product } from 'src/app/contracts/create_product';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ProductService } from 'src/app/services/common/models/product.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService)
  {
    super(spinner);
  }

  ngOnInit(): void {
    
    }

    @Output()  createdProduct : EventEmitter<Create_Product> = new EventEmitter();

    create(name: HTMLInputElement, stock: HTMLInputElement, price:HTMLInputElement){
      this.showSpinner(SpinnerType.BallAtom);
     
      const create_product : Create_Product = new Create_Product();
      create_product.name = name.value;
      create_product.stock = parseInt(stock.value);
      create_product.price = parseFloat(price.value);
      console.log(name.value);

   
      this.productService.create(create_product, () => {
        this.hideSpinner(SpinnerType.BallAtom);
        this.alertify.message("Ürün başarıyla eklenmiştir.", {
          dismissOthers: true,
          messageType: MessageType.Success,
          position: Position.TopRight
        });
        this.createdProduct.emit();
      }, errorMessage => {
        this.alertify.message(errorMessage,
          {
            dismissOthers: true,
            messageType: MessageType.Error,
            position: Position.TopRight
          });
      });
}
}

