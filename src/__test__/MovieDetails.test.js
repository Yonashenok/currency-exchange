import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import MovieDetails from '../components/MovieDetails';

const mockStore = configureStore([]);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ movieId: 'tt398239' }),
}));

describe('testing MovieDetails.js', () => {
  it('should display movie form the data', () => {
    const mockMovies = [
      {
        runTime: 60,
        releaseDate: '2004-11-3',
        title: 'Forever',
        rating: 6.7,
        imdbId: 'tt398239',
        image: 'movie.jpg',
        imageBig: 'bigImage.jpg',
        genre: 'genre',
        country: 'USA',
        plot: 'description',
        language: 'English',
      },
    ];

    const store = mockStore({
      movies: { movies: mockMovies },
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieDetails />
        </Provider>
      </BrowserRouter>,
    );

    const p1 = screen.getByText('Forever');
    const p2 = screen.getByText('description');
    const p3 = screen.getByText('Country: USA');
    const p4 = screen.getByText('genre');
    const img = screen.getAllByRole('img');

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
    expect(p3).toBeInTheDocument();
    expect(p4).toBeInTheDocument();
    expect(img).toHaveLength(2);
  });
});
