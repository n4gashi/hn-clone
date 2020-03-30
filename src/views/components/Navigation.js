import React, { Fragment, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const links = [
  { name: 'new', url: '#' },
  { name: 'past', url: '#' },
  { name: 'comments', url: '#' },
  { name: 'ask', url: '#' },
  { name: 'show', url: '#' },
  { name: 'jobs', url: '#' },
  { name: 'summit', url: '#' },
]

const HomeLink = ({ children }) => (
  <Link to="/">{children}</Link>
)

const Navigation = (props) => {
  const items = useMemo(() => {
    return links.map((link, index) => {
      return (
        <Fragment key={index}>
          <Link to={link.url}>{link.name}</Link>
          {index !== (links.length-1) && ' | '}
        </Fragment>
      )
    })
  }, [])

  return (
    <div className={props.className}>
      <div className="logo">
        <HomeLink><img src="https://news.ycombinator.com/y18.gif" alt="" /></HomeLink>
      </div>
      <div className="name">
        <HomeLink>React News</HomeLink>
      </div>
      <div className="menu">
        {items}
      </div>
      <div className="login">
        <Link to="#">login</Link>
      </div>
    </div>
  )
};

export default styled(Navigation)`
  & {
    display: flex;
    align-items: center;
    padding: 2px;
    color: #000;
    background-color: #FF6600;
  }

  & a { color: #000; text-decoration: none; }
  & a:hover,
  & a:visited,
  & a:active,
  & a:focus { color: #000; }

  & > div { padding-right: 4px; }
  & .logo { height:20px; }
  & .logo img {
    width: 18px;
    height: 18px;
    border: 1px white solid;
  }
  & .name { font-weight: bold; }
  & .menu { flex-grow: 1; }
`;
