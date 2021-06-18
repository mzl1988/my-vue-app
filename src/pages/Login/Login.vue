<template>
  <h1>Login</h1>

  <button type="button" @click="login">Login</button>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router"
import { useStore } from '@/store'
const router = useRouter()
const store = useStore()
const login = async () => {
  console.log('login')
  const { code, token }: { code: number, token: String } = await store.dispatch('user/login')
  console.log(code, token);
  console.log(store.state.user.token);
  console.log(store.getters['user/token']);

  router.replace("/")
}
</script>
  
  <style scoped>
</style>
  