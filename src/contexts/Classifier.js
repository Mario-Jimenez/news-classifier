import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { processNews, loadNews } from '../services/NewsClassifier';

export const ClassifierContext = React.createContext();

function ClassifierProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();

  const [news, setNews] = useState(() => []);

  const [categories, setCategories] = useState(() => []);
  const [deportes, setDeportes] = useState(() => []);
  const [economia, setEconomia] = useState(() => []);
  const [entretenimiento, setEntretenimiento] = useState(() => []);
  const [eventos, setEventos] = useState(() => []);
  const [politica, setPolitica] = useState(() => []);
  const [salud, setSalud] = useState(() => []);

  const [pages, setPages] = useState(10);

  const pageSize = 10;

  const getNews = async (url, portal) => {
    try {
      const response = (await loadNews(url, portal)).data;
      console.log(response);
    } catch (err) {
      // TODO: handle error
      // https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
      if (err.response) {
        // client received an error response (5xx, 4xx)
        switch (err.response.status) {
          case 400: // Bad request
            enqueueSnackbar('Bad request', {
              variant: 'warning',
            });
            break;
          case 404: // Not found
            enqueueSnackbar('Invalid request', {
              variant: 'error',
            });
            break;
          case 408: // Timeout
            enqueueSnackbar('Request took too long, please try again', {
              variant: 'warning',
            });
            break;
          case 500: // Internal Server Error
            enqueueSnackbar('Something went wrong, please try again', {
              variant: 'error',
            });
            break;
          default:
            console.log(err.response);
        }
      } else if (err.request) {
        // client never received a response, or request never left
        enqueueSnackbar("Can't reach server", {
          variant: 'error',
        });
      } else {
        // anything else
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setCategories([
      {
        id: 'Deportes',
        label: 'Deportes',
        value: 1,
      },
      {
        id: 'Economía',
        label: 'Economía',
        value: 1,
      },
      {
        id: 'Entretenimiento',
        label: 'Entretenimiento',
        value: 1,
      },
      {
        id: 'Eventos',
        label: 'Eventos',
        value: 1,
      },
      {
        id: 'Política',
        label: 'Política',
        value: 1,
      },
      {
        id: 'Salud',
        label: 'Salud',
        value: 1,
      },
    ]);
    setDeportes([
      {
        title: 'Deportes 1',
        url: 'https://www.google.com/',
      },
      {
        title: 'Deportes 2',
        url: 'https://www.google.com/',
      },
      {
        title: 'Deportes 3',
        url: 'https://www.google.com/',
      },
      {
        title: 'Deportes 4',
        url: 'https://www.google.com/',
      },
      {
        title: 'Deportes 5',
        url: 'https://www.google.com/',
      },
      {
        title: 'Deportes 6',
        url: 'https://www.google.com/',
      },
      {
        title: 'Deportes 7',
        url: 'https://www.google.com/',
      },
      {
        title: 'Deportes 8',
        url: 'https://www.google.com/',
      },
    ]);
    setEconomia([]);
    setEntretenimiento([
      {
        title: 'Entretenimiento 1',
        url: 'https://www.google.com/',
      },
    ]);
    setEventos([
      {
        title: 'Eventos 1',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 2',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 3',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 4',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 5',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 6',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 7',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 8',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 9',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 10',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 11',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 12',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 13',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 14',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 15',
        url: 'https://www.google.com/',
      },
      {
        title: 'Eventos 16',
        url: 'https://www.google.com/',
      },
    ]);
    setPolitica([
      {
        title: 'Política 1',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 2',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 3',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 4',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 5',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 6',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 7',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 8',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 9',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 10',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 11',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 12',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 13',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 14',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 15',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 16',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 17',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 18',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 19',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 20',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 21',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 22',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 23',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 24',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 25',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 26',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 27',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 28',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 29',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 30',
        url: 'https://www.google.com/',
      },
      {
        title: 'Política 31',
        url: 'https://www.google.com/',
      },
    ]);
    setSalud([
      {
        title: 'Salud 1',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 2',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 3',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 4',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 5',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 6',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 7',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 8',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 9',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 10',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 11',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 12',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 13',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 14',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 15',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 16',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 17',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 18',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 19',
        url: 'https://www.google.com/',
      },
      {
        title: 'Salud 20',
        url: 'https://www.google.com/',
      },
    ]);
    getNews();
  }, []);

  const processUrl = (url, newsSite) => {
    processNews(url, newsSite);
  };

  const listNews = (category, index) => {
    switch (category) {
      case 1:
        // calculate total pages
        setPages(Math.ceil(deportes.length / 10));
        setNews(deportes.slice((index - 1) * pageSize, index * pageSize));
        break;
      case 2:
        setPages(Math.ceil(economia.length / 10));
        setNews(economia.slice((index - 1) * pageSize, index * pageSize));
        break;
      case 3:
        setPages(Math.ceil(entretenimiento.length / 10));
        setNews(entretenimiento.slice((index - 1) * pageSize, index * pageSize));
        break;
      case 4:
        setPages(Math.ceil(eventos.length / 10));
        setNews(eventos.slice((index - 1) * pageSize, index * pageSize));
        break;
      case 5:
        setPages(Math.ceil(politica.length / 10));
        setNews(politica.slice((index - 1) * pageSize, index * pageSize));
        break;
      case 6:
        setPages(Math.ceil(salud.length / 10));
        setNews(salud.slice((index - 1) * pageSize, index * pageSize));
        break;
      default:
        setNews([]);
    }
  };

  return (
    <ClassifierContext.Provider
      value={{
        news,
        categories,
        pages,
        setPages,
        listNews,
        processUrl,
      }}
    >
      {children}
    </ClassifierContext.Provider>
  );
}

export default ClassifierProvider;
