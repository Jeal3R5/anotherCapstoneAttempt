import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import ListPaintings from "./components/ListPaintings.vue";
import EditPainting from "./components/EditPainting.vue";
import CreatePainting from "./components/CreatePainting.vue";
import Painting from "./components/Painting.vue";

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
    path: "/edit",
    name: "edit",
    component: EditPainting,
  },
  {
    path: "/add",
    name: "add",
    component: CreatePainting,
  },
  {
    path: "/painting/:id",
    name: "show",
    component: Painting,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
