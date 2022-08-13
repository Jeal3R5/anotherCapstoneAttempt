<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- edit here -->
      <h1>Edit Painting</h1>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            v-model="paintings.Title"
            required
          />
        </div>
        <div class="form-group">
          <label for="image">Image goes Here</label>
          <input
            type="image"
            class="form-control"
            v-model="paintings.Image"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            class="form-control"
            v-model="paintings.Description"
            required
          />
        </div>
        <div class="form-group">
          <label for="available">Available for Purchase</label>
          <input
            type="text"
            class="form-control"
            v-model="paintings.Available"
            required
          />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            class="form-control"
            v-model="paintings.Price"
            required
          />
        </div>
        <div>
          <!-- <button class="form-group mt-3">
            <button
              class="btn btn-primary"
              type="submit"
              value="Submit"
            />Submit
          </button> -->
          <button @click="savePainting" class="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PaintingDataService from '../services/PaintingDataService';

export default {
  data() {
    return {
      paintings: {},
    };
  },
  created() {
    let apiURL = `https://painting-diamonds.herokuapp.com/paintings/${this.$route.params.id}`;
    axios.get(apiURL).then((res) => {
      this.paintings = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `https://painting-diamonds.herokuapp.com/paintings/${this.$route.params.id}`;
      axios
        .put(apiURL, this.painting)
        .then((res) => {
          console.log(res);
          this.$router.push("/paintings");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
