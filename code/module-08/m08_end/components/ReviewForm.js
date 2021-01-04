app.component('review-form', {
  props: {
    previous: {
      type: Boolean,
      required: true,
    }
  },
  template: 
  /*html*/
  `<div class="componentBox">
    <h4 style="text-align:center;">{{ rateTrip }} {{ previous }}</h4>
    <p v-if="previous">Please tell us about your latest trip with Relecloud Galaxy Tours.</p>
    <p v-else>Please provide comments or submit questions regarding Relecloud Galaxy Tours.</p>
  </div>`,
  computed: {
    rateTrip() {
      if (this.previous) {
        return `Welcome Back to the Galaxy!`;
      }
      return `Comments are Welcome!`;
    }
  }
})
