<template>
  <div v-if="currentPainting" class="edit-form">
    <h4>{{ painting.Title }}</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="this.paintings.Title"
        />
      </div>
      <div class="form-group">
        <label for="image">{{ painting.Image }}</label>
        <input
          type="image"
          class="form-control"
          id="image"
          v-model="currentPainting.Image"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentPainting.Description"
        />
      </div>
      <div class="form-group">
        <label><strong>Available for Purchase</strong></label>
        <input
          type="boolean"
          class="form-control"
          id="available"
          v-model="currentPainting.AvailableForPurchase"
        />
      </div>
      <div>
        <label><strong>Price</strong></label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="currentPainting.price"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="deletePainting">
      Delete
    </button>
    <button type="submit" class="badge badge-success" @click="updatePainting">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Painting...</p>
  </div>
</template>

<script>
import PaintingDataService from "../services/PaintingDataService";

export default {
  name: "painting",
  data() {
    return {
      currentPainting: null,
      message: "",
    };
  },
  methods: {
    getPainting(id) {
      PaintingDataService.get(id)
        .then((response) => {
          this.currentPainting = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePainting() {
      PaintingDataService.update(this.currentPainting.id, this.currentPainting)
        .then((response) => {
          console.log(response.data);
          this.message = "The painting was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePainting() {
      PaintingDataService.delete(this.currentPainting.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "paintings" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getPainting(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
