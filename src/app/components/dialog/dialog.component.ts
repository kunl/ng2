import {
    NgModule,
    Component,
    Directive,
    ViewContainerRef,
    ComponentRef,
    ComponentFactoryResolver,
    ViewChild,
    AfterViewInit,
    Compiler,
    ComponentFactory
} from '@angular/core';



@Component({
    selector: 'dialog-demo',
    template: `
        <div #container>
            <input [(ngModel)]="tpl">
        </div>
        <div class="open-button" (click)="openDialogBox()">Open dialog box</div>
    `,
    styles: [`
        :host {
            display: flex;
            justify-content: center
        }
        .open-button {
            padding: 5px;
            border: 1px solid black;
            cursor: pointer;
        }
    `]
})

export class DialogComponent implements AfterViewInit {

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

    tpl:string;

    constructor(public compiler: Compiler) {

    }

    openDialogBox() {
        let tpl = this.tpl || '<h2>Dynamic Module!</h2>'
        this.addComponent(tpl);
    }

    ngAfterViewInit() {


    }

    addComponent(template: string) {


        @Component({ template: template })
        class TemplateComponent { }

        @NgModule({
            declarations: [TemplateComponent]
        })
        class TemplateModule { }

        const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        const factory = mod.componentFactories.find(comp => {
            return comp.componentType == TemplateComponent
        });
        const compoent = this.container.createComponent(factory);
    }
}
