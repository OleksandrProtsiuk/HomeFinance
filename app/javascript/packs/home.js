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
            errors: [],
            notice: [],
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitIncomeForm() {
            let new_transaction_url = '/transactions.json';

            if(this.account_id && this.amount && this.category_id) {
                axios.post( new_transaction_url, {
                    account_id: this.account_id,
                    destination_account_id: this.destination_account_id,
                    destination_account_amount: this.destination_account_amount,
                    amount: this.amount,
                    comment: this.comment,
                    category_id: this.category_id
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                });
                this.account_id = null;
                this.destination_account_id = null;
                this.destination_account_amount = null;
                this.amount = null;
                this.comment = null;
                this.category_id = null;
                this.errors = [];
                this.notice.push('Data added');
            }
            else {
                this.errors = [];
                if (!this.account_id) this.errors.push('Select account');
                if (!this.category_id) this.errors.push('Select category');
                if (!this.amount) this.errors.push('Amount required');
            }
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
            errors: [],
            notice: [],
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitExpanseForm() {
            let new_transaction_url = '/transactions.json';
            let new_amount = '-' + this.amount;

            if(this.account_id && this.amount && this.category_id) {
                axios.post( new_transaction_url, {
                    account_id: this.account_id,
                    destination_account_id: this.destination_account_id,
                    destination_account_amount: this.destination_account_amount,
                    amount: new_amount,
                    comment: this.comment,
                    category_id: this.category_id
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                });
                this.account_id = null;
                this.destination_account_id = null;
                this.destination_account_amount = null;
                this.amount = null;
                this.comment = null;
                this.category_id = null;
                this.errors = [];
                this.notice.push('Data added');
            }
            else {
                this.errors = [];
                if (!this.account_id) this.errors.push('Select account');
                if (!this.category_id) this.errors.push('Select category');
                if (!this.amount) this.errors.push('Amount required');
            }
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
            errors: [],
            notice: [],
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitTransferForm() {
            let new_transaction_url = '/transactions.json';
            let new_amount = '-' + this.amount;

            if(this.account_id && this.destination_account_id && this.amount) {
                axios.post( new_transaction_url, {  /*  minus from from account  */
                    account_id: this.account_id,
                    destination_account_id: this.destination_account_id,
                    destination_account_amount: this.destination_account_amount,
                    amount: new_amount,
                    comment: this.comment,
                    category_id: this.category_id
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                });

                axios.post( new_transaction_url, {  /* plus to destination account */
                    account_id: this.destination_account_id,
                    destination_account_id: null,
                    destination_account_amount: null,
                    amount: this.amount,
                    comment: this.comment,
                    category_id: this.category_id
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                });

                this.account_id = null;
                this.destination_account_id = null;
                this.destination_account_amount = null;
                this.amount = null;
                this.comment = null;
                this.category_id = null;
                this.errors = [];
                this.notice.push('Data added');
            }
            else {
                this.errors = [];
                if (!this.account_id) this.errors.push('Select account, please');
                if (!this.destination_account_id) this.errors.push('Select destination account, please');
                if (!this.amount) this.errors.push('Amount required');
            }
        },

    }
});

new Vue({
    el: '#new-account',
    data() {
        return {
            title: '',
            currency: '',
            color: '',
            user_id: '',
            errors: [],
            notice: [],
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitNewAccountForm() {
            let new_account_url = '/accounts.json';

            if(this.title && this.title.length <= 18 && this.title !== ' ') {
                axios.post( new_account_url, {
                    title: this.title,
                    currency: this.currency,
                    color: this.color,
                    user_id: this.user_id,
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                });
                this.title = null;
                this.currency = null;
                this.color = null;
                this.errors = [];
                this.notice = [];
                this.notice.push('Data added');
            }
            else {
                this.errors = [];
                if (!this.title) this.errors.push('Input title of the new account');
                if (this.title === ' ') this.errors.push('Input valid title of new account');
                if (this.title.length > 18) this.errors.push('Tille is to long. Max len-18 letters.' +
                    'Your len-' + this.title.length);
            }
        },

    }
});


new Vue({
    el: '#new-category',
    data() {
        return {
            title: '',
            about: '',
            user_id: '',
            errors: [],
            notice: [],
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitNewCategoryForm() {
            let new_account_url = '/categories.json';

            if(this.title) {
                axios.post( new_account_url, {
                    title: this.title,
                    about: this.about,
                    user_id: this.user_id,
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                });
                this.title = null;
                this.about = null;
                this.errors = [];
                this.notice = [];
                this.notice.push('Data added');
            }
            else {
                this.errors = [];
                if (!this.title) this.errors.push('Title required');
            }
        },

    }
});

new Vue({
    el: '#view-category',
    data() {
        return {
            categories: null
        }
    },
    methods: {
        updateCategoryList() {
            let new_account_url = '/categories.json';

                axios.get( new_account_url).then(response => {
                    this.categories = JSON.stringify(response, null, 2)
                });
                return this.categories;

        },

    }
});
/*
new Vue({
    el: '#8',
    data() {
        return {
            amount: null
        }
    },
    methods: {
        updateSum() {
            let current_amount_url = '/categories.json';

            axios.get( current_amount_url).then(response => {
                this.amount = JSON.stringify(response, null, 2)
            });
            return this.amount;

        },

    }
}) */
