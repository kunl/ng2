import { Component, Input, Output, EventEmitter, ComponentRef } from '@angular/core';
import {User} from './user';

@Component({
    selector: 'child',
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
                    <p>One fine body {{name}};</p>
                    <div class="form-group">
                        <input type="text" class="form-control" [(ngModel)]="data.username" placeholder="用户名">
                    </div>
                    <div class="form-group">
                        <input type="telphone" class="form-control" [(ngModel)]="data.telphone"  placeholder="手机号">
                    </div>
                    <div>{{data | json}}</div>
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
    private data: User = {
        username: '用户名',
        telphone: 13999999999
    }
    @Input() name: string;
    // @Input() ref: ComponentRef;
    
    @Output() finally = new EventEmitter();
    
    constructor() { 
        
    }
    
    cancel(){
        // this.ref.destroy();
        console.log(`cancelaaa`)
    }

    destory(){
        this.finally.emit(this.data);
    }

}