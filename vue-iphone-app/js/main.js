const myApp = Vue.createApp({
    data() {
        return {
            title: 'iPhone 13',
            parag: 'Android is better',
            img: 'assets/images/iphone-13-blue.png',
            inStock: true,
            quantity : 10,
            specs: ['2 Puces', 'Camera', 'HDR'],
            cart : 0,
            variants: [
                { id: 'iphone13-001', color: 'blue', img: './assets/images/iphone-13-blue.png' },
                { id: 'iphone13-002', color: 'black', img: './assets/images/iphone-13-midnight.png' },
                { id: 'iphone13-003', color: 'red', img: './assets/images/iphone-13-red.png' },
            ],
        }
    },
    methods: {
        updateImage(imageUrl) {
            this.img = imageUrl
        }
    }
}).mount('#app')