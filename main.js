const app = new Vue ({
    el: '#app',
    data:{
        randomMail:'',
        mailArr:[],
    },
    methods:{

    },
    mounted(){
        /* axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>{
            this.randomMail = response.data.response;
            console.log(this.randomMail);
        }) */
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                this.randomMail = response.data.response;
                console.log(this.randomMail);
                this.mailArr.push(this.randomMail);
                console.log(this.mailArr);
            })
        }
     
    }
})