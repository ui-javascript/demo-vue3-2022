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
  watch,
} from "vue";

const text = ref("text");
const count = ref(0);

const add = () => {
  count.value++;
};

const changeText = () => {
  text.value = "text " + Math.random();
};


const waitAndChangeText = async() => {
  return new Promise();
}

watch(
  count,
  (count, prevCount) => {
    
    console.log(text.value)

    // setTimeout(() => {
    //   console.log("最新的text " + text.value);
    // }, 2000);

    console.log(text.value)

    // waitAndChangeTextimage.png

  }
);
</script>

<script>
export default {
  name: "App",
  components: {},
};
</script>

