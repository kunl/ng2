import { Injectable } from '@angular/core';
import { LoadScriptService } from './loadScript.service';
@Injectable()
export class BaiduMaptService {

    constructor(
        private _loadScript: LoadScriptService
    ) { }

    init(key) {
        return this._load(key);
    }
    private _load(key: string) {
        let _callback_str = '__baidu_map_cb_' + (Math.random().toString()).slice(2, 6),

            url = `http://api.map.baidu.com/api?v=2.0&ak=${key}&callback=${_callback_str}`;

        return new Promise((resolve, reject) => {

            this._loadScript.load(url).catch((err) => reject(err));

            window[_callback_str] = (map) => {

                resolve();
                console.log('baidu map callback')
                delete window[_callback_str];
            }
        })

    }



}