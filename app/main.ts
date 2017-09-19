import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'hello-angular',
    template: `
        <div>
            Hello {{name}}!<br>
            Hello {{names}}!
        </div>
    `
})
class HelloAngular {
    name: string;
    names: string[];

    constructor() {
        this.name = 'Dima';
        this.names = ['Dima', 'Alexey', 'Yana']
    }
}

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloAngular],
    bootstrap: [HelloAngular]
})
class HelloAngularAppModule {
}

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);
