
<template>
    <div id="deletePainting">
        <h3>Are you sure you want to delete this painting??</h3>
        <button class="badge badge-danger mr-2"
      @click="deletePainting">Delete</button>
    </div>
</template>

<script>
import axios from 'axios'
import PaintingDataService from '../services/PaintingDataService';

export default {
    name: "deletePainting",
    created() {
        let apiURL = `https://painting-diamonds.herokuapp.com/paintings/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
        console.log("res.data", res.data)
        this.paintings = res.data;
        });
    },
    methods: {
        deletePainting() {
        let apiURL = `https://painting-diamonds.herokuapp.com/paintings/${this.paintings._id}`;
        axios
            .delete(apiURL, this.paintings)
            .then((res) => {
            console.log(res);
            this.$router.push("/paintings");
            })
            .catch((error) => {
            console.log(error);
            });
        },
    },
props: [
    "id"
   ]
}

</script>