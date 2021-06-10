import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import NewsItem from './NewsItem';
import { ClassifierContext } from '../../contexts/Classifier';

function NewsList() {
  const { news } = useContext(ClassifierContext);

  const newsItems = news.map((item, i) => (
    <NewsItem
    // eslint-disable-next-line react/no-array-index-key
      key={i}
      title={item.title}
      url={item.url}
    />
  ));

  return (
    <List>
      {newsItems}
    </List>
  );
}

export default NewsList;
