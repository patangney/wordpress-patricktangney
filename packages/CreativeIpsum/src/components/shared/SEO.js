import React from 'react'
import { connect, Head } from 'frontity'

const SEO = ({state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  
  return (
    <Head>
      <title>{post.title.rendered}</title>
      <meta name='description' content={post.excerpt.rendered} />
    </Head>
  )
}

export default connect(SEO)
