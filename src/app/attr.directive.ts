import { Directive, ElementRef, Attribute, Input } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective {

    constructor(private element: ElementRef) {
        console.log('been called')
    }

    @Input("pa-attr")
    bgClass: string;
    
    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success",
            "text-white");
    }
}


