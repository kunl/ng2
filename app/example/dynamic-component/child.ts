import { Component, Input, Output, EventEmitter, ComponentRef, ViewRef } from 'angular2/core';

@Component({
    selector: 'child',
    providers: [ViewRef],
    styles: [`
        .mask{
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(10, 10, 10, .4)
        }
    `],
    template: `
        <div class="modal-backdrop in"></div>
        <div class="modal fade in" style="display: block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="cancel()">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                    <p>One fine body&hellip;</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="cancel()">Close</button>
                    <button type="button" class="btn btn-primary" (click)="destory()">Save changes</button>
                </div>
                </div>
            </div>
        </div>
     
    `
})
export class ChildComponent {
    @Input() name: string;
    @Input() ref: ComponentRef;
    
    @Output() finally = new EventEmitter();
    
    constructor(
        private hv : ViewRef
    ) { 
        
        console.log(this.hv)
    }
    
    cancel(){
        this.ref.dispose();
        console.log(`cancel`)
    }

    destory(){
        this.finally.emit(true);
    }

}