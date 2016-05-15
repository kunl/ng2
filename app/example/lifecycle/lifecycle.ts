import { Component, OnInit, AfterContentInit,
     AfterViewInit, AfterContentChecked, AfterViewChecked,
      OnChanges, OnDestroy, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lifecycle',
    changeDetection: ChangeDetectionStrategy.CheckOnce,
    template: `
        <input type="text" [(ngModel)]="text">
    
    `
})
export class LifecycleComponent implements OnInit {
    private num: number = 0;
    private text: string = '初始';
    constructor() { }

    ngOnInit() { 
        this._log('init')
    }
    
    ngOnchanges() {
        this._log('changes')
    }
    
    ngDoCheck() {
        this._log('do check')
    }
    
    ngAfterContentInit() {
        this._log('content init')
    }
    
    ngAfterContentChecked() {
        this._log('content checked')
    }
    
    ngAfterViewInit() {
        this._log('view init')
    }
    
    
    ngAfterViewChecked(){
        this._log('view checked')
    }
    
    ngOnDestory() {
        this._log('destory')
    }

    _log(msg: string){
        console.log(`${this.num++} -- ${msg}`)
    }
}