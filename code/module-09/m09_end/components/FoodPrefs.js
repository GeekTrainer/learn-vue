app.component('food-prefs', {
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
    <h4 style="text-align:center;">Food Preferences</h4>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>
    <form>
    <label for="passenger">Passenger:  </label>
    <input id="passenger" v-model="passenger">

    <label for="glutenfree">Gluten-free?  </label>
    <select id="glutenfree" v-model="glutenfree">
      <option>Yes</option>
      <option>No</option>
    </select>
    <br><br>
    
    <label for="vegan">Vegan?  </label>
    <select id="vegan" v-model="vegan">
      <option>Yes</option>
      <option>No</option>
    </select>
    <br><br>

    <label for="allergies">Do you have food allergies?  </label>
    <select id="allergies" v-model="allergies">
      <option>Yes</option>
      <option>No</option>
    </select>
    <br><br>

    <label for="allergydesc">Describe Allergies: </label>      
    <textarea id="allergydesc" v-model="allergydesc"></textarea>

    <div style="text-align:center;"><input class="button" type="submit" value="Submit"></div>
    </form>
  </div>`,
/* TODO: Add form data properties */
  data() {
    return {
      passenger: '',
      glutenfree: '',
      vegan: '',
      allergies: '',
      allergydesc: '',
    }
  },
   computed: {
    roomService() {
      if (this.berth) {
        return `: No charge`;
      }
      return `: $24.99`;
    }
  }
})
