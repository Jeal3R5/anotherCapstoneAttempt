<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <!-- <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        /> -->
        <div class="input-group-append">
          <!-- <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button> -->
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Painting Collection</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(painting, index) in paintings"
          :key="index"
          @click="setActivePainting(painting, painting._id)"
        >
          {{ painting.Title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentPainting">
        <h4>Painting</h4>
        <div>
        
          <label><strong>Title:</strong></label> {{ currentPainting.Title }}
        </div>
        <div>
          <img v-bind:src="currentPainting.Image" />
        </div>
        <router-link
          :to="'/paintings/edit/' + currentIndex"
          class="badge-warning">Edit
          </router-link>
        <router-link
          :to="'/paintings/delete/' +currentIndex"
          class="badge-warning">Delete</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please select a Painting...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PaintingDataService from "../services/PaintingDataService";

export default {
  name: "paintings-list",
  data() {
    return {
      paintings: [],
      currentPainting: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePaintings() {
      PaintingDataService.getAll()
        .then((response) => {
          this.paintings = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrievePaintings();
      this.currentPainting = null;
      this.currentIndex = -1;
    },
    setActivePainting(painting, index) {
      this.currentPainting = painting;
      this.currentIndex = painting ? index : -1;
    },
    searchPainting() {
      PaintingDataService.findByTitle(this.title)
        .then((response) => {
          this.paintings = response.data;
          this.setActivePainting(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePaintings();
  },
};
</script>

<style>
.list {
  text-align: center;
  max-width: 750px;
  margin: auto;
}

img {
  height: 250px;
  width: 250px;
  border-radius: 75%;
}

a {
  padding: 5px;
}
</style>
