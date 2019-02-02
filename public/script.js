console.log('New Vue Instance');
new Vue({
    el: "#app",
    data: {
        total: 0,
        products: [
            { title: "test 1" },
            { title: "test 1" },
            { title: "test 1" },
        ]
    },
    methods: {
        addToCart: function() {
            this.total += 9.99
        }
    }
});