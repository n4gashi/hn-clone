import React, { useMemo } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';

const Item = (props) => {
  const {
    className,
    index,
    title,
    url,
    author,
    score,
    time,
    nbComments,
  } = props;

  const domain = useMemo(() => {
    if (!url) {
      return null
    }
    return (new URL(url).host).replace('www.', '')
  }, [url])

  const formattedPoints = useMemo(() => {
    return `${score} ${(score === 1) ? 'point' : 'points'}`
  }, [score])

  const authorLink = useMemo(() => {
    return <Link to="#">{author}</Link>
  }, [author])

  const timeAgoLink = useMemo(() => {
    return <Link to="#"><TimeAgo datetime={time} /></Link>
  }, [time])

  const commentsLink = useMemo(() => {
    return (
      <Link to="#">
        {`${nbComments} ${(nbComments === 1 ? ' comment' : ' comments')}`}
      </Link>
    )
  }, [nbComments])

  return (
    <div className={className}>
      <div className="detail">
        <span className="index">{index}.</span>
        <button className="upvote">▲</button>
        <span className="title">
          <Link to="#">{title}</Link>
        </span>
        &nbsp;
        {domain && <span className="website">
          <Link to="#">({domain})</Link>
        </span>}
      </div>
      <div className="meta">
        {formattedPoints} by {authorLink} {timeAgoLink}
        {" | "}
        {commentsLink}
      </div>
    </div>
  )
}

Item.propTypes = {
  
}

export default styled(Item)`
  & a { text-decoration: none; }
  & a:hover { text-decoration: underline; }
  & button.upvote {
    border: none;
    padding: 0 4px;
    color: #828282;
    background: none;
  }
  & .title a { color: #000; }
  & .title a:hover { text-decoration: none; }
  & .website a{ color: #828282; font-size: 8pt; }
  & .meta { color: #828282; font-size: 7pt; }
  & .meta a { color: #828282; font-size: 7pt; }
`;
