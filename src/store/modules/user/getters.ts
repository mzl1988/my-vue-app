import { IUserState } from './state'

export const getters = {
  token: (state: IUserState) => state.token,
  name: (state: IUserState) => state.name,
}