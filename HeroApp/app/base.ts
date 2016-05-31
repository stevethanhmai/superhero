module HeroApp {
    'use strict';

    export interface IBaseClass {
        showLoading(isShow: boolean);
        showNotification(message: string, messageType: string, timeout: number);


    }

    export class BaseClass implements IBaseClass{
        /**
         * 
         * @param {boolean} isShow
         */
        public showLoading = (isShow: boolean) => {
            //Todo: Implement show/hide loading.            
        }

        /**
         * 
         * @param {string} message 
         * @param {string} messageType: "info"|"success"|"warning"|"error"
         * @param {number} timeout: in milisecond (default 1000ms)
         */
        public showNotification = (message: string, messageType = "info", timeout = 1000) => {
            //Todo: Implement showNotification
        }

    }
} 