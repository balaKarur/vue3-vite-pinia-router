import { createRouter , createWebHashHistory} from "vue-router";

import taskView from "../views/tasksView.vue"
import statsView from "../views/statsView.vue"

const routes: Array<object> = [{
  path: "/",
  component: taskView,
  name: 'tasks'
}, {
  path: "/stats",
  component: statsView,
  name: "stats"
}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;