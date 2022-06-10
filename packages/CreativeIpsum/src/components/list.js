import React from 'react'
import { connect  } from 'frontity'
import {Items, PrevNextNav} from './../styles/Items';
import Link from '@frontity/components/link'


const List = ({ state, actions }) => {
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
    <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </Items>
  )
}

export default connect(List)
