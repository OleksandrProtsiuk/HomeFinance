/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from "vue/dist/vue.esm.js";

// console.log('Hello World from Webpacker');

let app = new Vue ({
    el: '#app',
    data: {
        acc_value: '',
        acc_status: '',

        from_acc_id: ''
    },
    computed: {
        positive: function () {
            let status = this.acc_status;
            let potato = this.acc_value;

            if (status === 'costs') {
                potato = '-' + potato;
            }
            return potato
        },
        /* control function for checking Vue status !!Remove before production*/
        hall: function () {
            return 777
        }
    }
});

