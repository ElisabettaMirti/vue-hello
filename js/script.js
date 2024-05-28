const { createApp } = Vue;

createApp({
    data() {
        return {
            message:'',
            image: ''
        }
    },
    methods: {
        complimenti: function() {
            alert('Wow, ottima scelta!')
            return
        }
    }
}).mount('#app');