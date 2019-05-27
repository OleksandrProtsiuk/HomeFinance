import Vue from "vue/dist/vue.esm.js";
import axios from "axios";

// --------------------- Components

Vue.component('donutChart', {
    template: '#donutTemplate',
    props: ["initialValues"],
    data() {
        return {
            angleOffset: -90,
            chartData: [],
            colors: ['coral', 'lightgreen'],
            cx: 80,
            cy: 80,
            radius: 60,
            sortedValues: [],
            strokeWidth: 40,
        }
    },
    computed: {
        // adjust the circumference to add small white gaps
        adjustedCircumference() {
            return this.circumference - 2
        },
        circumference() {
            return 2 * Math.PI * this.radius
        },
        dataTotal() {
            return this.sortedValues.reduce((acc, val) => acc + val)
        },
        calculateChartData() {
            this.sortedValues.forEach((dataVal, index) => {
                const { x, y } = this.calculateTextCoords(dataVal, this.angleOffset);
                // start at -90deg so that the largest segment is perpendicular to top
                const data = {
                    degrees: this.angleOffset,
                    textX: x,
                    textY: y
                };
                this.chartData.push(data);
                this.angleOffset = this.dataPercentage(dataVal) * 360 + this.angleOffset
            })
        },
        sortInitialValues() {
            return this.sortedValues = this.initialValues.sort((a,b) => b-a)
        }
    },
    methods: {
        calculateStrokeDashOffset(dataVal, circumference) {
            const strokeDiff = this.dataPercentage(dataVal) * circumference;
            return circumference - strokeDiff
        },
        calculateTextCoords(dataVal, angleOffset) {
            // t must be radians
            // x(t) = r cos(t) + j
            // y(t) = r sin(t) + j

            const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
            const radians = this.degreesToRadians(angle);

            const textCoords = {
                x: this.radius * Math.cos(radians) + this.cx,
                y: this.radius * Math.sin(radians) + this.cy
            };
            return textCoords
        },
        degreesToRadians(angle) {
            return angle * (Math.PI / 180)
        },
        dataPercentage(dataVal) {
            return dataVal / this.dataTotal
        },
        percentageString(dataVal) {
            return `${Math.round(this.dataPercentage(dataVal) * 100)}%`
        },
        returnCircleTransformValue(index) {
            return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`
        },
        segmentBigEnough(dataVal) {
            return Math.round(this.dataPercentage(dataVal) * 100) > 5
        }
    },
    mounted() {
        this.sortInitialValues
        this.calculateChartData
    }
});



// ------------------------ Elements

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

new Vue({
    el: '#test',
    data: {
        account: null,
        transactions: null
    },
    methods: {
        accounts: function() {
            if (this.account === null ) {
                axios.get( '/accounts.json').then(response => {
                    this.account = response.data;
                });
            }
            return this.account;
        },
        edit_link: function(id) {
            return '/accounts/' + id + '/edit'
        },
        current_amount: function (id) {
            let value = 0.0;
            if (this.transactions === null) {
                axios.get( '/transactions.json').then(response => {
                    this.transactions = response.data
                });
            }

            this.transactions.forEach(function (element) {
                if (parseInt(element.account_id) === parseInt(id)) {
                    value += parseFloat(element.amount);
                }
            });
            return value;
        }
    }
});

new Vue({
    el: "#totales",
    data: {
        values: [0, 0],
        transactions: null
    },
    methods: {
        totals () {
            let income = 0.0;
            let expanse = 0.0;

            if (this.transactions === null) {
                axios.get( '/transactions.json').then(response => {
                    this.transactions = response.data
                });
            }

            this.transactions.forEach(function (element) {
                if (parseFloat(element.amount) >= 0 ) {
                    income += parseFloat(element.amount)
                }
                else {
                    expanse += parseFloat(element.amount)
                }
            });

            return this.values = [income, expanse];
        }
    },
    beforeMount() {
        this.totals()
    }
});
