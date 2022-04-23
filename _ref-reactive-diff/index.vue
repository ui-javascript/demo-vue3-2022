<template>
  {{ obj.arr }}
</template>

<script setup>
import {reactive, onMounted } from "vue"
const obj = reactive({
  arr: []
}) 

onMounted(() => {
  obj.arr = [1,2,3]
})

</script>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

