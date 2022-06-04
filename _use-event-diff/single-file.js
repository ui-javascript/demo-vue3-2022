import { createApp } from 'vue'

const App = {
  template: `
<div>
      <span>count is {{ count }}</span>
      <button type="primary" @click="increment">count++</button>
</div>
  `,
  data() {
    return {
      count: 0,
    }
  },
  // computed: {
  //   plusOne: function () {
  //     return this.count + 1
  //   },
  // },
  methods: {
    increment() {
      this.count++
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(this.count)
    }, 3000)
  }
}



createApp(App).mount('#app')