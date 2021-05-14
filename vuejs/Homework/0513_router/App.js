import Create from "./component/Create.js";
import Index from "./component/Index.js";
import List from "./component/List.js";
import Search from "./component/Search.js";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/list",
      name: "List",
      component: List,
    },
    {
      path: "/create",
      name: "Create",
      component: Create,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
  ],
});
