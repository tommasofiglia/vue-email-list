// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


let app = new Vue({
  // options object
  el: "#app",
  data:{
    randomNumber: "",
    position: "",
    squares: []
  },
  methods: {
    //Funzione che, al click sul quadrato, assegna il valore numerico relativo alla posizione del quadrato all'oggetto position.

    numberOnClick(index) {
      this.position = index;
      console.log(this.position);

    //Utilizzo axios per trovare il numero random tra 1 e 9.
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(number => {
      this.randomNumber = (number.data.response);
      console.log(this.randomNumber);
      alert('Il numero generato è ' +  this.randomNumber);

      });

    }
  },

  created() {
    this.squares.length = 36;
    console.log(this.squares.length);
  }
});
