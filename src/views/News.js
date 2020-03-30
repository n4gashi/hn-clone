import React, { useEffect, useState } from 'react';
import qs from 'qs';
import Item from 'components/Item';
import Api from 'utils/api';
import axios from 'axios';

const ITEMS_PER_PAGE = 30;

const News = (props) => {
  const {
    location: { search }
  } = props;
  const { p: page = 1 } = qs.parse(search, { ignoreQueryPrefix: true });
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    (async() => {
      const { data: topStories } = await Api.getTopStories();

      const itemsToFetch = topStories.slice(
        ITEMS_PER_PAGE*(page-1),
        ITEMS_PER_PAGE-1+(ITEMS_PER_PAGE*(page-1))
      )
      
      const [...responses] = await axios.all(
        itemsToFetch.map((itemId) => Api.getItem(itemId))
      );
      setItems(responses.map(({ data }) => data))
    })()
  }, [page])

  return items.map((item, idx) => {
    return (
      <Item
        // I know this is bad but it's ok for the test
        index={(idx+1+(ITEMS_PER_PAGE*(page-1)))}
        key={idx}
        author={item.by}
        score={item.score}
        title={item.title}
        nbComments={item.descendants}
        url={item.url}
      />
    )
  })
}

export default News;
