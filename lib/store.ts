import { createStore, action } from 'easy-peasy'

// Easy peasy uses redux / immer under the hood but is a more simple solution for this app
export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload
  }),
})
