<template>
    <h1>Home</h1>

    <button type="button" @click="toLogin">to login</button>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router"
const router = useRouter()
const toLogin = () => {
    console.log('to login')
    router.replace("/login")
}
</script>
  
  <style scoped>
</style>
  