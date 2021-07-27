import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import React, {useState} from 'react'
import { Link } from 'gatsby';

import algoliasearch from 'algoliasearch/lite'

import SearchIcon from '../../content/images/magnifier.svg'
import SearchIconActive from '../../content/images/magnifier-active.svg'

import {
    InstantSearch,
    Configure,
    Highlight,
    connectHits,
    connectSearchBox,
    connectStateResults,
  } from 'react-instantsearch-dom'

const client = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )  


  const Hits = connectHits(({hits}) => (
    <div
      css={{
        width: ['90vw', '100%', '100%'],
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'white',
        overflow: 'auto',
        borderRadius: 8,
        marginTop: '5px',
        maxHeight: 500,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: 'small',
      }}
    >
      <ul css={{margin: 0, width: '100%'}}>
        {hits.map(hit => (
          <li
            key={hit.objectID}
            css={{
              display: 'flex',
              width: '100%',
              marginBottom: 1,
              borderBottom: '1px solid',
              borderColor: '#f1f1f1',
              paddingTop: 10,
              paddingBottom: 3,
            }}
          >
            <Link
              to={hit.fields.slug}
              css={{
                width: '100%',
                height: '100%',
                lineHeight: 1.2,
                color: 'text',
                px: 3,
                paddingBottom: 2,
                paddingLeft:10,
                textDecoration: 'none !important',
                minHeight: 80,
              }}
              activeClassName="active"
            >
              <Highlight
                attribute="title"
                hit={hit}
                tagName="mark"
                css={{
                  fontSize: [2, 3]
                }}
              />
              <Highlight
                css={{
                  display: 'block',
                  color: 'black',
                  fontSize: 12,
                  opacity: 0.8,
                  marginTop: 2,
                  lineHeight: 1.6,
                  padding:5
                }}
                attribute="excerpt"
                hit={hit}
                tagName="mark"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ))

const Label = styled.label`
    display: block;
`

const SearchBox = connectSearchBox(
  ({currentRefinement, refine, setIsActive, ...props}) => {
    const {isToggled} = props
    const inputRef = React.useRef(null)
    React.useEffect(() => {
      isToggled && inputRef.current.focus()
    }, [isToggled])
    return (
      <form noValidate action="" role="search" css={{mb: 0}} {...props}>
        <Label htmlFor="search">
          <input
            ref={inputRef}
            css={{
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 'normal',
              background: `url(${SearchIcon}) no-repeat`,
              backgroundSize: '18px',
              backgroundPositionX: '12px',
              backgroundPositionY: '50%',
              ':focus': {
                background: `url(${SearchIconActive}) no-repeat`,
                backgroundSize: '18px',
                backgroundColor: 'white',
                backgroundPositionX: '12px',
                backgroundPositionY: '50%',
                outline: 'none',
                '::placeholder': {opacity: 0.15},
              },
              '::placeholder': {opacity: 0.3, color: 'text'},
              backgroundColor: 'white',
              border: 'none',
              borderRadius: 8,
              display: 'block',
              fontSize: '18px',
              padding: '0.5rem 0.75rem 0.5rem 38px',
              width: '100%',
              boxShadow: 'small',
            }}
            placeholder="Search..."
            type="search"
            autoComplete="off"
            id="search"
            value={currentRefinement}
            onBlur={() => {
              if (currentRefinement === '') {
                setIsActive(false)
              }
            }}
            onChange={event => {
              setIsActive(true)
              refine(event.currentTarget.value)
            }}
          />
        </Label>
      </form>
    )
  }
)

// Show search results after user starts typing
const Results = connectStateResults(({searchState, searchResults}) =>
  searchState && searchState.query ? (
    <div css={{position: 'relative'}}>
      <Hits />
    </div>
  ) : null
)


const SearchContainer = styled.div`
  width: 100%;
`

const Search = props => {
    const [isActive, setIsActive] = useState(false)
    
    return (
      <InstantSearch
        searchClient={client}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        root={{Root: SearchContainer}}
      >
        <Configure distinct={1} hitsPerPage={30} />
        <div css={{width: ['90%', '100%']}}>
          <SearchBox {...props} setIsActive={setIsActive} />
          <Results />
        </div>
      </InstantSearch>
    )
};

Search.propTypes = {
    themeStyle: PropTypes.string,
    customStyle: PropTypes.string,
};

export default Search;
