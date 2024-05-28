const { createApp } = Vue;

createApp({
    data() {
        return {
            message:'Hello Vue!',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg'
        }
    }
}).mount('#app');