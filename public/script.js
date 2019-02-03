console.log('New Vue Instance');
new Vue({
    el: "#app",
    data: {
        search: "",
        total: 0,
        products: [{
                title: "test 1",
                id: 1,
                price: 9.99
            },
            {
                title: "test 2",
                id: 2,
                price: 9.99
            },
            {
                title: "test 3",
                id: 3,
                price: 9.99
            },
        ],
        cart: []
    },
    methods: {
        submitSearch: function () {

        },
        addToCart: function (product) {
            this.total += product.price;
            var found = false;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === product.id) {
                    this.cart[i].qty++;
                    found = true;
                }
            }
            if (!found) {
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1
                });
            }
        },
        inc: function (product) {
            product.qty++;
            this.total += product.price;
        },
        dec: function (product) {
            product.qty--;
            this.total -= product.price;
            if (product.qty <= 0) {
                let i = this.cart.indexOf(product);
                this.cart.splice(i, 1);
            }
        }
    },
    filters: {
        currency: function (price) {
            return "$".concat(price.toFixed(2));
        }
    }
});