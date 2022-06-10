// File: /packages/CreativeIpsum/src/index.js

import Root from './components'

const myFirstTheme = {
  name: 'CreativeIpsum',
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: false
    }
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      }
    }
  }
}

export default myFirstTheme
