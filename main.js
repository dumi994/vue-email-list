const app = new Vue ({
    el: '#app',
    data:{
        randomMail:'',
    },
    methods:{

    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>{
            this.randomMail = response.data.response;
            console.log(this.randomMail);
        })
    }
})