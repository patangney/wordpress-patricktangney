import React from 'react'
import { connect } from 'frontity'
import Items from './../styles/Items';
import Link from '@frontity/components/link'


const List = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <Items>
      {data.items.map(item => {
        const post = state.source[item.type][item.id]
        return (
          <Link key={item.id} link={post.link}>
            {post.title.rendered}
            <br />
          </Link>
        )
      })}
    </Items>
  )
}

export default connect(List)
