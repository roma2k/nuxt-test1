export const state = () => ({
  logged: false,
  userName: '',
  user: {
    email: 'mail@mail.com',
    userPic: '/userpic.png'
  }
})

export const mutations = {
  setLogged(state, logged) {
    state.logged = logged
  },
  setUserName(state, userName) {
    state.userName = userName
  }
}

export const actions = {
  login({commit}, userName) {
    setTimeout(() => {
      commit('setLogged', true)
      this.$router.push('/')
    }, 3000)

    commit('setUserName', userName)
  },
  logout({commit}) {
    commit('setLogged', false)
    commit('setUserName', '')
  }
}

export const getters = {
  logged: s => s.logged,
  getUserName: s => s.userName,
  getUserData: s => s.user
}
