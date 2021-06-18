
import { IUserState } from './state'

export const mutations = {
  setToken: (state: IUserState, token: string) => {
    state.token = token
  },
}