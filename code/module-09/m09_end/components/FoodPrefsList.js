app.component('foodpref-list', {
  props: {
    foodprefs: {
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
      <li v-for="(foodpref, index) in foodprefs" :key="index">
        {{ foodpref.passenger }} prefers Gluten-free {{ foodpref.glutenfree }}
        <br/>
        "{{ foodpref.foodpref }}"
      </li>
    </ul>
  </div>
`
})
