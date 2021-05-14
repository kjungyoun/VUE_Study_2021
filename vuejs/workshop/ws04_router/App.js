import Index from "./component/Index.js";
import List from "./component/List.js";
import Create from "./component/Create.js";
import Search from "./component/Search.js";
import Update from "./component/Update.js";
import Remove from "./component/Remove.js";

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
    {
      path: "/update",
      name: "Update",
      component: Update,
    },
    {
      path: "/remove",
      name: "Remove",
      component: Remove,
    },
  ],
});
