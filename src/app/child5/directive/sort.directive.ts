import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort: Array<any>
  @Input() initialList: Array<any>
  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @HostListener("click")
  sortData(){
    const sort = new Sort();
    const element = this.targetElement.nativeElement;
    const order = element.getAttribute("data-order");
    const type = element.getAttribute("data-type");
    const property = element.getAttribute("data-name");
    if(order==="desc"){
      this.appSort.sort(sort.startSort(property,order,type));
      element.setAttribute("data-order","neutral")
    }
    if (order === "asc") {
      this.appSort.sort(sort.startSort(property,order,type));
      element.setAttribute("data-order","desc")
    }
    if (order === "neutral") {
      this.appSort.sort(sort.startSort(property,order,"object", this.initialList));
      element.setAttribute("data-order","asc")
    }
  }
}
