app.component('food-prefs', {
  //TODO: Add berth prop
  props: {
    berth: {
      type: Boolean,
      required: true,
    }
  },
  template: 
  /*html*/
  `<div class="componentBox">
    <h3 style="text-align:center;">Food Preferences</h3>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>
  </div>`,
  //TODO: Add computed property
  computed: {
    roomService() {
      if (this.berth) {
        return `: No charge`;
      }
      return `: $24.99`;
    }
  }
})
