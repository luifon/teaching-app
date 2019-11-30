import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCustomBackground]'
})
export class CustomBackgroundDirective implements AfterViewInit {

  @Input() inputColor: string;
  constructor(private REF_ELEM: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this._highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._highlight(this.inputColor);
  }

  private _highlight(color: string): void {
    this.REF_ELEM.nativeElement.style.backgroundColor = color;
  }

  ngAfterViewInit(): void {
    this.REF_ELEM.nativeElement.style.backgroundColor = this.inputColor;
  }
}
