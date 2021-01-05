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
  <h4 style="text-align:center;">{{ rateTrip }}</h4>
  <p v-if="previous">Please tell us about your latest trip with <strong>Relecloud Galaxy Tours</strong> by filling out the form below.</p>
  <p v-else>Please provide comments or submit questions regarding Relecloud Galaxy Tours.</p>
  </div>

  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Review a previous cruise</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review Comments:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <br>
    <label for="recommend">Would you recommend a <strong>Relecloud Galaxy Cruise</strong>?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit">  

  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null,
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
        alert('Form is incomplete. Please fill out every field.')
        return
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend

      }
      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = null;

    },
  },
  computed: {
    rateTrip() {
      if (this.previous) {
        return `Welcome Back to the Galaxy!`;
      }
      return `Comments are Welcome!`;
    }
  }
})
