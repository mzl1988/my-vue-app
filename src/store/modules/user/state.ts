import { createStorage } from '@/utils/Storage'
import { ACCESS_TOKEN } from '@/store/mutation-types'
const Storage = createStorage({ storage: localStorage })

export type IUserState = {
  token: string
  name: string
}

export const state: IUserState = {
  token: Storage.get(ACCESS_TOKEN, ''),
  name: '',
}