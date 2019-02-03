console.log('New Vue Instance');
new Vue({
    el: "#app",
    data: {
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
        addToCart: function (product) {
            this.total += product.price;
            let found = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === product.id)
                    this.cart[i].qty++;
                found = true;

            }
            if (!found) {
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1
                });
            }
        }
    }
});