import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCrimsonBackground]'
})
export class CrimsonBackgroundDirective {


  constructor(ELEM: ElementRef) {
    ELEM.nativeElement.style.backgroundColor = 'crimson';
  }

}
