import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @HostBinding('style.transformOrigin') transformOrigin = '0 0';
  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transition') transition = 'transform .5s ease';
  @HostBinding('style.color') color;

  @HostListener('mouseenter')
  zoomIn() {
    this.transform = 'scale(1.5)';
    this.color = 'red';
  }
  @HostListener('mouseleave')
  zoomOut() {
    this.transform = 'scale(1)';
    this.color = 'black';
  }
  constructor() {
    console.log('ZOOOOOOMMMMMM !');
  }

}
