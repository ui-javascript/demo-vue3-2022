<template>
  <div>
    <span>{{ text }}</span>
    <button @click="changeText">修改文字</button>
  </div>

  <div>
    <span>{{ count }}</span>
    <button @click="add">+1</button>
  </div>
</template>

<script setup>
import {
  ref,
  watchEffect,
  // onMounted,
  // onUnmounted
} from "vue";


let timer = null
const text = ref("text");
const count = ref(0);

const add = () => {
  count.value++;
};

const changeText = () => {
  text.value = "text " + Math.random();
};


watchEffect(
  () => {

    console.log("timer" + timer)

    timer = setTimeout(() => {
      console.log("最新的count " + count.value);
      console.log("最新的text " + text.value);
    }, 2000);
 
  }
);

// onMounted(() => {
//   console.log("输出" + timer)
//   timer = setTimeout(() => {
//     console.log("最新值" + count.value)
//   }, 3000)
// })
// onUnmounted(() => {
//   clearTimeout(timer)
// })

</script>

<script>
export default {
  name: "App",
  components: {},
};
</script>

