import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private ELEM: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.ELEM.nativeElement.value;
    this.ELEM.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this.ELEM.nativeElement.value) {
      event.stopPropagation();
    }
  }


}
