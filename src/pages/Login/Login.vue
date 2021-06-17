<template>
    <h1>Login</h1>

    <button type="button" @click="login">Login</button>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router"
const router = useRouter()
const login = () => {
    console.log('login')
    router.replace("/")
}
</script>
  
  <style scoped>
</style>
  