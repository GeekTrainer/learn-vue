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
  <div class="print-list">
  <h3>Food preferences submitted:</h3>
    <ul>
      <li v-for="(foodpref, index) in foodprefs" :key="index">
        <strong>{{ foodpref.passenger }}</strong>
        <br>
        Food allergies:  {{ foodpref.allergies }} <br>
        Allergy description: {{ foodpref.allergydesc }}
        <br>
        Gluten-free:  {{ foodpref.glutenfree }} 
        <br/>
        Vegan:  {{ foodpref.vegan }} 
      </li>
    </ul>
  </div>
`
})
