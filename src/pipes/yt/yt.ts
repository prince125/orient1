import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
/**
 * Generated class for the YtPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'yt',
})
export class YtPipe implements PipeTransform {

  constructor(private dom:DomSanitizer){

  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value,args) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}
