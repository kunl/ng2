import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    styles: [`
        .current-page {color: #00dcc1}
        .pagination .page{
            display: inline-block;
            padding: 2px 12px;
            margin-right: -1px;
            border: 1px solid #00dcc1;
            background: #fff;
            border-radius: 2px；
        }
        button:focus{outline: none}
        .pagination a {cursor: pointer;}
        
    `],
    selector: 'pagination',
    templateUrl: 'pagination.html'
})
export class PaginationDirective implements OnInit {
    
    /**  _current 当前页码 */
    @Input('page') _current: number | string;
    
    /** 总数 */
    @Input() total: number | string;
    
    /** 每页 显示条数*/
    @Input() rows: number | string;
    
    @Output() pageChange = new EventEmitter();
    
    private pages: [number];
    
    constructor() { }

    ngOnInit() { 
        this.pages = [1, 2, 3]
    }
    
    
    
    go(page: number){
        this._current = page;
        this.pageChange.next(page);
        
        console.log(this.hasNext)
        console.log(this._current)
    }
    
    
    /** 当前页 添加 class */
    isCurrent(page: number){
        
        return page == this._current;
    }
    
    /**是否有上一页， 下一页 */
    get hasPrev(){
        return this._current > 1;
    }
    get hasNext(){
        return this._current < this.total;
    }
    
}