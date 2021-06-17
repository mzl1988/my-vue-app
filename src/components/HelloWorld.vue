<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="inc">count is: {{ count }}</button>
  <p>countMax is: {{ data.countMax }}</p>
  <input type="text" v-model="name" />
  <p>
    Edit
    <code class="text">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, reactive, watch, watchEffect } from "vue"
const color = "red"
const font = {
  size: "24px"
}
defineProps({
  msg: String,
})
ref: count = 0
const data = reactive({
  countMax: computed(() => count * 2)
})
const inc = () => count++

ref: name = null

onMounted(() => {
  count = 10
  console.log(name);
  setTimeout(() => {
    console.log(name)
  }, 1000);
})
watch(() => count, (countNew, countOld) => {
  console.log(countNew)
  console.log(countOld)
}, { immediate: true, })
const stop = watchEffect(() => {
  console.log('watchEffect count: ' + count)
  console.log('watchEffect name: ' + name)
  if (count > 30) {
    stop()
  }
})
</script>

<style scoped>
.text {
  color: v-bind(color);
  font-size: v-bind("font.size");
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
