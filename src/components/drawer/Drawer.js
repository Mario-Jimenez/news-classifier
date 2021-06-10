import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp';
import PieChartSharpIcon from '@material-ui/icons/PieChartSharp';
import SportsSoccerSharpIcon from '@material-ui/icons/SportsSoccerSharp';
import MovieFilterSharpIcon from '@material-ui/icons/MovieFilterSharp';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import AnnouncementSharpIcon from '@material-ui/icons/AnnouncementSharp';
import Pagination from '@material-ui/lab/Pagination';
import NewsList from '../list/NewsList';
import PieChart from '../graph/PieChart';
import TopBar from './TopBar';
import { ClassifierContext } from '../../contexts/Classifier';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  pagination: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
  },
}));

function ClassifierDrawer() {
  const { pages, listNews } = useContext(ClassifierContext);

  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    listNews(selectedIndex, value);
  };

  const handleListItemClick = (event, index) => {
    setPage(1);
    setSelectedIndex(index);
    listNews(index, 1);
  };

  const container = selectedIndex === 0 ? <PieChart /> : (
    <>
      <NewsList />
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Pagination className={classes.pagination} count={pages} page={page} color="secondary" onChange={handlePageChange} />
      </Box>
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <PieChartSharpIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'overline' }} primary="Reporte" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <SportsSoccerSharpIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'overline' }} primary="Deportes" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <MonetizationOnSharpIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'overline' }} primary="Economía" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <MovieFilterSharpIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'overline' }} primary="Entretenimiento" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <AnnouncementSharpIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'overline' }} primary="Eventos" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <AccountBalanceSharpIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'overline' }} primary="Política" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <LocalHospitalSharpIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'overline' }} primary="Salud" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {container}
      </main>
    </div>
  );
}

export default ClassifierDrawer;
