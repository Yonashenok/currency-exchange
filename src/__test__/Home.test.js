import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('testing Home.js', () => {
  it('should display buttons of catagories', () => {
    const mockMovies = [
      {
        runTime: 60,
        releaseDate: '2004-11-3',
        title: 'the big band theory',
        rating: 6.7,
        imdbId: 'tt398239',
        image: 'movie.jpg',
        imageBig: 'bigImage.jpg',
        genre: 'Comedy',
        country: 'USA',
        plot: 'description',
        language: 'English',
      },
      {
        runTime: 60,
        releaseDate: '2004-11-3',
        title: 'Forever',
        rating: 6.7,
        imdbId: 'tt398239',
        image: 'movie.jpg',
        imageBig: 'bigImage.jpg',
        genre: 'Crime',
        country: 'USA',
        plot: 'description',
        language: 'English',
      },
      {
        runTime: 160,
        releaseDate: '2004-11-3',
        title: 'Jumanji',
        rating: 6.7,
        imdbId: 'tt398239',
        image: 'movie.jpg',
        imageBig: 'bigImage.jpg',
        genre: 'Adventure',
        country: 'USA',
        plot: 'description',
        language: 'English',
      },
    ];
    const store = mockStore({
      movies: { movies: mockMovies },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const header = screen.getByText('Catagories');
    const button = screen.getAllByRole('button');

    expect(button).toHaveLength(4);
    expect(header).toBeInTheDocument();
  });
});
