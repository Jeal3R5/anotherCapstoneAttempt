import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import ListPaintings from "./components/ListPaintings.vue";
import EditPainting from "./components/EditPainting.vue";
import CreatePainting from "./components/CreatePainting.vue";
import Painting from "./components/Painting.vue";
import DeletePainting from "./components/DeletePainting.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/paintings",
    name: "index",
    component: ListPaintings,
  },
  {
    path: "/paintings/edit/:id",
    name: "edit",
    component: EditPainting,
  },
  {
    path: "/paintings/add",
    name: "add",
    component: CreatePainting,
  },
  {
    path: "/paintings/:id",
    name: "show",
    component: Painting,
  },
  {
    path: "/paintings/delete/:id",
    name: "delete",
    component: DeletePainting,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
