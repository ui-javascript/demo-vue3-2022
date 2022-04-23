<template>
  {{ arr }}

  <p>
    {{refArr}}
  </p>
</template>

<script setup>
import {ref, reactive, onMounted } from "vue"

// 文档上本来就写着作用于对象, 不能用在数组上
var arr = reactive([]) 
const refArr = ref([])

onMounted(() => {
  arr = [1,2,3]
  refArr.value = [1,2,3]
})

</script>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

