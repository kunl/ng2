import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    styles: [`
    
        .current-page {color: red}
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
    @Input('page') current: number | string;
    
    /** 总数 */
    @Input() total: number | string;
    
    /** 每页 显示条数*/
    @Input() pagesize: number | string;
   
    
    @Output() pageChange = new EventEmitter();
    
    /**页码长度 */
    private pagesLength: number = 7;
  
    
    private pagesizeArray = [10, 50, 100];
    
    /**页码 list */
    private pages: any[];
    
    constructor() { 
        
    }

    ngOnInit() { 
        this.getPagesArray();
        
    }
    
    /** 页码数量 */
    get pageCount(){
        return Math.ceil(+this.total/+this.pagesize);
    }
   
    
    go(page: number){
        console.log('点击了 ',page)
        if(isNaN(page)) {
            return
        };
        this.current = page;
        this.pageChange.next(page);
        
        this.getPagesArray();
    }
    
    
    /** 当前页 添加 class */
    isCurrent(page: number){
        return page == this.current;
    }
    
    
    
    /**获取页码列表 */
    getPagesArray(){
        this.pages = [];
        
        const {start, end} = this.start_end();
        
        let num = +end - start + 1;
        // if(start != 1){
        //     this.pages.unshift(1);
        // }
        
        console.log('end', end, 'start', start)
        
        
        if(end < this.total){
            if(end <= +this.total -1){
                this.pages.push(...['...', this.total]);
                num -= 2;
            }else{
                this.pages.push(this.total);
                num--;
            }
        }
        
        
        while(num--){
            this.pages.unshift(start + num);
        }
    }
    
    /**页码 开始，结束 */
    start_end(){
        let start = 1;
        let end = this.total;
        
        start = Math.max(+this.current - Math.floor(this.pagesLength / 2), 1);
        // if(this.current > Math.floor( this.pagesLength /2 )){
        //     start = 1
        // }else{
        //     start = +this.current;
        // }
        
        end = start + this.pagesLength - 1;
        
        /**
         * 如果 total=30， current=29，pagesLength=7
         * 根据 end = start + this.pagesLength - 1;
         * 则end=[29 - (7+1)/2 ] + 7 -1 = 31,大于total
         */
        if(end > this.total){
            end = this.total;
            start = Math.max(+this.total - this.pagesLength + 1, 1);
        }
        
        return {start, end};
    }
    
    
    /**是否有上一页， 下一页 */
    get hasPrev(){
        return this.current > 1;
    }
    get hasNext(){
        return this.current < this.total;
    }
    
}