// https://github.com/Akryum/vue-virtual-scroller/tree/next/packages/vue-virtual-scroller
import { createApp } from "vue";
import VueVirtualScroller from "vue-virtual-scroller";
import "./index.less";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const App = {
  template: `
<RecycleScroller
  page-mode
  class="scroller"
  :items="list"
  :item-size="32"
  key-field="id"
  v-slot="{ item }"
  >
  <div class="user">
    {{ item.name }}
  </div>
</RecycleScroller>
  `,
  setup() {
    return {
      list: [
        {
          id: 1,
          name: 1111,
        },
        {
          id: 2,
          name: 2222,
        },
        {
          id: 3,
          name: 3333,
        },
        {
          id: 4,
          name: 4444,
        },
        {
          id: 5,
          name: 5555,
        },
        {
          id: 6,
          name: 6666,
        },
        {
          id: 7,
          name: 7777,
        },
        {
          id: 8,
          name: 8888,
        },
      ],
    };
  },
};

createApp(App)
  .use(VueVirtualScroller)
  .mount("#app");
