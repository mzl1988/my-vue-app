import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import modules from '@/store/modules'
import { IStore } from './types'

export const key: InjectionKey<Store<IStore>> = Symbol()

export const store = createStore<IStore>({
  modules
})

// 定义你自己的“useStore”组合函数
export function useStore() {
  return baseUseStore(key)
}