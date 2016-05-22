import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-dialog',
    template: `
    <section *ngIf="show">
    <div class="modal-backdrop in"></div>
    <div class="modal in" style="display: block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" (click)="_cancel()">
                    <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title">
                    <ng-content select="[title]"></ng-content>
                    </h4>
                </div>
                <div class="modal-body">
                    <ng-content select="[body]"></ng-content>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-secondary" data-dismiss="modal" (click)="_cancel()">Close</button>
                    <button class="btn btn-sm btn-primary" (click)="_next()">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    </section>
    `
})
export class DialogDirective implements OnInit {
    constructor() { }
    
    /**
     * show 是否显示
     * openChange 改变外部的 open
     * next 确认(true)，或取消(false)的 callback
     */
    @Input('open') show:boolean = false;
    @Output() openChange = new EventEmitter()
    @Input() next: any;
    
    n = 0;
    
    ngOnInit() { 
        console.log(this)
    }
    
    close(){
        this.show = false;
        this.openChange.next(false);
    }
    
    private _next(){
        this.close();
        this.next(true)
    }
    
    private _cancel(){
        this.close();
        this.next(false);
    }
    
}