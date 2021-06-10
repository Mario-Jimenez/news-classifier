import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function NewsItem({ title, url }) {
  const handleListItemClick = () => {
    window.open(url, '_blank');
  };

  return (
    <ListItem button onClick={() => handleListItemClick()}>
      <ListItemText primaryTypographyProps={{ variant: 'subtitle1' }} primary={title} />
    </ListItem>
  );
}

export default NewsItem;
