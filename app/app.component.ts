import {Component} from "@angular/core";

@Component({
    selector: 'hello-angular',
    template: `
        <ul>
            <li *ngFor="let name of names">Hello {{name}}!</li>
        </ul>
    `
})
export class HelloAngular {
    name: string;
    names: string[];

    constructor() {
        this.names = ['Dima', 'Alexey', 'Yana', 'John'];
    }
}
