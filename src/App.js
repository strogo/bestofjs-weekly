import React from 'react'
import { Root, Routes /*addPrefetchExcludes*/ } from 'react-static'
import styled, { createGlobalStyle } from 'styled-components'
import { Router } from '@reach/router'

import Header from './components/Header'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

const GlobalStyle = createGlobalStyle`
  *,:after,:before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #541600;
    background-color: #ececec;
    border-bottom: 5px solid #e65100;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .link {
    color: #e65100;
  }
  .hidden-sm {
    @media (max-width: 599px) {
      display: none;
    }
  }
`

const AppStyles = styled.div`
  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 0 1rem;
    max-width: 900px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
  }
  .text-small {
    font-size: 0.75rem;
  }
  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
  }
`

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(["dynamic"]);

const App = () => (
  <Root>
    <GlobalStyle />
    <AppStyles>
      <Header />
      <div className="content">
        <React.Suspense fallback={<Spinner />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
        <Footer />
      </div>
    </AppStyles>
  </Root>
)

export default App
