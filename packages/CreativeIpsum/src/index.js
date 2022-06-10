// File: /packages/CreativeIpsum/src/index.js

import Root from './components'
import link from '@frontity/html2react/processors/link'

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
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default myFirstTheme
