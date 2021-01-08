let app = new Vue({
  // options object
  el: "#app",
  data:{
    emails:[]
  },
  methods:{

  },
  mounted(){
    //All'interno di mounted posso utilizzare axios e le API per ricavale le email random
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(email => {
      this.emails.push(email.data.response);
      })
    }
  }

});
