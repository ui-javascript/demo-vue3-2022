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
          name: 2111,
        },
        {
          id: 3,
          name: 2111,
        },
        {
          id: 4,
          name: 2111,
        },
        {
          id: 5,
          name: 2111,
        },
        {
          id: 6,
          name: 2111,
        },
        {
          id: 7,
          name: 2111,
        },
        {
          id: 8,
          name: 2111,
        },
      ],
    };
  },
};

createApp(App)
  .use(VueVirtualScroller)
  .mount("#app");
