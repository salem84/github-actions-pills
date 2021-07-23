import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import PostPreview from './postPreview';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

export default function Search() {
  return (
    <InstantSearch
      indexName='Docs'
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits hitComponent={PostPreview}/>
    </InstantSearch>
  )
}