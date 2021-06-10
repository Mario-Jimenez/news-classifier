import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSnackbar } from 'notistack';
import { ClassifierContext } from '../../contexts/Classifier';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
  formControl: {
    minWidth: 220,
  },
  selectEmpty: {
    color: '#ffffff',
    margin: theme.spacing(2),
  },
}));

function TopBar() {
  const { enqueueSnackbar } = useSnackbar();

  const { processUrl } = useContext(ClassifierContext);

  const classes = useStyles();

  const [newsSite, setNewsSite] = React.useState('');

  const [url, setURL] = React.useState('');

  const handleNewsSiteChange = (event) => {
    setNewsSite(event.target.value);
  };

  const handleURLChange = (event) => {
    setURL(event.target.value);
  };

  const handleProcessClick = () => {
    if (url === '') {
      enqueueSnackbar('Ingrese URL', {
        variant: 'warning',
      });
      return;
    }

    if (newsSite === '') {
      enqueueSnackbar('Seleccione un noticiero', {
        variant: 'warning',
      });
      return;
    }

    processUrl(url, newsSite);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="button" noWrap>
          Clasificador de Noticias
        </Typography>
        <div className={classes.search}>
          <InputBase
            placeholder="https://www.example.com/"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleURLChange}
          />
        </div>
        <FormControl className={classes.formControl}>
          <Select
            value={newsSite}
            onChange={handleNewsSiteChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>Seleccionar Noticiero</em>
            </MenuItem>
            <MenuItem value="teletica">Teletica</MenuItem>
            <MenuItem value="repretel">Repretel</MenuItem>
            <MenuItem value="crhoy">CRHoy</MenuItem>
            <MenuItem value="diarioextra">Diario Extra</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="secondary" disableElevation onClick={handleProcessClick}>Procesar</Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
