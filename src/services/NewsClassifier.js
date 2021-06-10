import instance from './AxiosInstance';

const processNews = (url, portal) => instance.post('/news/process', {
  url,
  portal,
});

const loadNews = () => instance.get('/news/load');

export {
  processNews,
  loadNews,
};
