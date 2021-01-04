app.component('foodpref-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-list">
  <h3>Food preferences submitted:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <strong>{{ review.passenger }}</strong>
        <br>
        Food allergies:  {{ review.allergies }} <br>
        Allergy description: {{ review.allergydesc }}
        <br>
        Gluten-free:  {{ review.glutenfree }} 
        <br/>
        Vegan:  {{ review.vegan }} 
      </li>
    </ul>
  </div>
`
})
