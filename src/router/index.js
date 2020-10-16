import Vue from "vue"
import Router from "vue-router"
import WvcIndex from "@/templates/WvcIndex"
import WvcNotFound from "@/templates/WvcNotFound"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: WvcIndex,
    },
    {
      path: "*",
      name: "NotFound",
      component: WvcNotFound,
    },
  ],
})
