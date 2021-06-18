
import { ActionContext } from 'vuex'
import { IUserState } from './state'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { storage } from '@/utils/Storage'
import { IStore } from '@/store/types'

export const actions = {
    // 登录
    async login({ commit }: ActionContext<IUserState, IStore>) {
        try {

            storage.set(ACCESS_TOKEN, '1234')
            commit('setToken', '1234')

            return Promise.resolve({ code: 200, token: '1234' })
        } catch (e) {
            return Promise.reject(e)
        }
    },


}