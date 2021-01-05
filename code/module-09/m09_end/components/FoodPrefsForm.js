app.component('foodprefs-form', {
  props: {
    berth: {
      type: Boolean,
      required: true,
    }
  },
  template: 
  /* TODO: Add <form> element below last <p> tag */
  /*html*/
  `<div class="componentBox">
    <h3 style="text-align:center;">Food Preferences</h3>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>

    <form @submit.prevent="onSubmit">
    <h4>Submit food preferences</h4>
    <label for="passenger">Passenger name:</label>
    <input id="passenger" v-model="passenger">

    <br>
    <label for="allergies">Do you have food allergies?  </label>
    <select id="allergies" v-model.number="allergies">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br>
    <label for="allergydesc">Describe allergies: (enter "None" if not applicable)</label>      
    <textarea id="allergydesc" v-model="allergydesc"></textarea>

    <label for="glutenfree">Gluten-free?  </label>
    <select id="glutenfree" v-model.number="glutenfree">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br><br>
    <label for="vegan">Vegan?  </label>
    <select id="vegan" v-model="vegan">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br>
    <input class="button" type="submit" value="Submit">  

  </form>
  </div>`,
/* TODO: Add form data properties and methods */
  data() {
    return {
      passenger: '',
      allergies: '',
      allergydesc: '',
      glutenfree: '',
      vegan: '',
    }
  },
  /* TODO: Add methods */
  methods: {
    onSubmit() {
      if (this.passenger === '' || this.allergies === '' || this.allergydesc === '' || this.glutenfree === '' || this.vegan === '') {
        alert('Form is incomplete. Please fill out every field.')
        return
      }

      let foodprefanswers = {
        passenger: this.passenger,
        allergies: this.allergies,
        allergydesc: this.allergydesc,
        glutenfree: this.glutenfree,
        vegan: this.vegan,
      }

      this.$emit('foodpref-submitted', foodprefanswers);

      this.passenger = '';
      this.allergies = '';
      this.allergydesc = '';
      this.glutenfree = '';
      this.vegan = '';

    },
  },
  computed: {
    roomService() {
      if (this.berth) {
        return `: No charge`;
      }
      return `: $24.99`;
    }
  },
})
