import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        deliveryItems: [],
        orderType: 'newOrder',
        moveItems: null,
        isMobilMenu: false
    },
    mutations: {
        updateDeliveryItems(state, value) {
            state.deliveryItems = value
        },
        updateOrderType(state, value) {
            state.orderType = value
        },
        updateMoveItems(state, value) {
            state.moveItems = value
        },
        updateMobileMenu(state, value) {
            state.isMobilMenu = value
        }
    },
    actions: {
        setItems({commit}, value) {
            commit('updateDeliveryItems', value)
        },
        setOrderType({commit}, value) {
            commit('updateOrderType', value)
        },
        setMoveItems({commit}, value) {
            commit('updateMoveItems', value)
        },
        setMobileMenu({commit}, value) {
            commit('updateMobileMenu', value)
        }
    },
    getters: {
        getItems(state) {
            return state.deliveryItems
        },
        getOrderType(state) {
            return state.orderType
        },
        getMoveItems(state) {
            return state.moveItems
        },
        getMobileMenu(state) {
            return state.isMobilMenu
        },
    }
})
