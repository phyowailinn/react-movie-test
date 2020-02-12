import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        component: HomePage,
        path: '/',
        exact: true
      },
      {
        path: '/movie/:id',
        component: MovieDetail
      }
    ]
  }
];
