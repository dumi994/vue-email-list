const app = new Vue ({
    el: '#app',
    data:{
        randomMail:'',
        mailArr:[],
    },
    methods:{

    },
    mounted(){
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                this.randomMail = response.data.response;
                this.mailArr.push(this.randomMail);
            })
        }
    }
})