import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value : any  , estado): any {
    if(estado) 
      return value.url
    else 
      return 'assets/img/noimage.png'
  }


}
