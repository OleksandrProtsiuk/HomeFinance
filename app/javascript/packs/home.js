import Vue from "vue/dist/vue.esm.js";

new Vue({
    el: '#income-transaction',
    data() {
        return {
            account_id: '',
            destination_account_id: '',
            destination_account_amount: '',
            amount: '',
            comment: '',
            category_id: '',
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitIncomeForm() {
            let new_transaction_url = '/transactions.json';
            axios.post( new_transaction_url, {
                account_id: this.account_id,
                destination_account_id: this.destination_account_id,
                destination_account_amount: this.destination_account_amount,
                amount: this.amount,
                comment: this.comment,
                category_id: this.category_id
            }).then(response => {
                this.response = JSON.stringify(response, null, 2)
            })
        },

    }
});

new Vue({
    el: '#expanse-transaction',
    data() {
        return {
            account_id: '',
            destination_account_id: '',
            destination_account_amount: '',
            amount: '',
            comment: '',
            category_id: '',
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitExpanseForm() {
            let new_transaction_url = '/transactions.json';
            let new_amount = '-' + this.amount;
            axios.post( new_transaction_url, {
                account_id: this.account_id,
                destination_account_id: this.destination_account_id,
                destination_account_amount: this.destination_account_amount,
                amount: new_amount,
                comment: this.comment,
                category_id: this.category_id
            }).then(response => {
                this.response = JSON.stringify(response, null, 2)
            })
        },

    }
});

new Vue({
    el: '#transfer-transaction',
    data() {
        return {
            account_id: '',
            destination_account_id: '',
            destination_account_amount: '',
            amount: '',
            comment: '',
            category_id: '',
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitTransferForm() {
            let new_transaction_url = '/transactions.json';
            let new_amount = '-' + this.amount;
            axios.post( new_transaction_url, {
                account_id: this.account_id,
                destination_account_id: this.destination_account_id,
                destination_account_amount: this.destination_account_amount,
                amount: new_amount,
                comment: this.comment,
                category_id: this.category_id
            }).then(response => {
                this.response = JSON.stringify(response, null, 2)
            })
        },

    }
});
