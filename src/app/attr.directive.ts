import { Directive, ElementRef, Attribute, Input, SimpleChange } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective {

    constructor(private element: ElementRef) {
        //console.log('been called')
    }

    @Input("pa-attr")
    bgClass: string;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        console.log('changes called');
        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;

        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }

    ngOnInit() {
       console.log('init called')
    }
}


