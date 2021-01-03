app.component('tripreview-form', {
  template:
  /*html*/
  `<div class="componentBox">
   <form>
    <h4>Submit a review of your previous trip experience</h4>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <input class="button" type="submit" value="Submit">
  </form>
  </div>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  }
})