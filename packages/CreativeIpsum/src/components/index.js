// File: /packages/my-first-theme/src/components/index.js

import React from 'react'
import { connect, Global, css } from 'frontity'
import {Header, HeaderContent, Main} from '../styles/Header'
import Menu from '../styles/Menu'

import Link from '@frontity/components/link'
import List from './list'
import Post from './post'
import Page from './page'

import Switch from '@frontity/components/switch'

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: 'Roboto', sans-serif;
          }
        `}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
          <HeaderContent>
        <h1>Hello Frontity</h1>
        { state.theme.isUrlVisible ? <p>Current URL: {state.router.link}</p> : null }
        <Menu>
          <Link link='/'>Home</Link>
          <br />
          <Link link='/page/2'>More posts</Link>
          <br />
          <Link link='/about-us'>About Us</Link>
        </Menu>
        </HeaderContent>
      </Header>
      <hr />
      <Main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </Main>
    </>
  )
}

export default connect(Root)
