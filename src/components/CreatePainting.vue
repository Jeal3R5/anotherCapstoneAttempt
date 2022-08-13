<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="painting.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="image">Image goes here</label>
        <input
          type="image"
          class="form-control"
          id="image"
          v-model="painting.image"
          name="image"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          required
          v-model="painting.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label for="available">Available for Purchase</label>
        <input
          type="text"
          class="form-control"
          id="available"
          required
          v-model="painting.available"
          name="available"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="available"
          required
          v-model="painting.price"
          name="price"
        />
      </div>
      <button @click="savePainting" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPainting">
        Add New Painting
      </button>
    </div>
  </div>
</template>

<script>
import PaintingDataService from "../services/PaintingDataService";

export default {
  name: "add-painting",
  data() {
    return {
      painting: {
        id: null,
        title: "",
        image: "",
        description: "",
        available: false,
        price: 0,
      },
      submitted: false,
    };
  },
  methods: {
    savePainting() {
      const data = {
        Title: this.painting.title,
        Image: this.painting.image,
        Description: this.painting.description,
        Available: this.painting.availableForPurchase,
        Price: this.painting.price,
      };
      PaintingDataService.create(data)
        .then((response) => {
          this.painting.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newPainting() {
      this.submitted = false;
      this.painting = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
