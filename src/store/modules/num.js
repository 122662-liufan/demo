const state = {
    num: 10,
}

const getters = {
    // 获取num 
    getNum: state => state.num + 1
}

const mutations = {
    //定义修改的方式
    incrementNum (state) {
        state.num = state.num + 1
    },
    decrementNum (state) {
        state.num = state.num - 1
    }
}

const actions = {

}

export default {
    namespaced: true,     //给每一个子模块定义为单独的空间
    state,
    getters,
    mutations,
    actions
}