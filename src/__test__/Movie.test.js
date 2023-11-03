import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Movie from '../components/Movie';

describe('testing Movie.js', () => {
  it('should display movie form the data', () => {
    const mockMovieData = {
      poster: '/',
      title: 'the big bang theory',
      releaseDate: '2007-01-11',
      movieType: 'comedy',
      id: 'tt53738',
      rating: 8,
      runTime: 30,
    };

    render(
      <BrowserRouter>
        <Movie movie={mockMovieData} />
      </BrowserRouter>,
    );

    const title = screen.getByText('the big bang theory');
    expect(title).toBeInTheDocument();
  });

  it('should display movie form the data', () => {
    const mockMovieData = {
      poster: '/',
      title: 'the big bang theory',
      releaseDate: '2007-01-11',
      movieType: 'comedy',
      id: 'tt53738',
      rating: 8,
      runTime: 30,
    };

    const Component = render(
      <BrowserRouter>
        <Movie movie={mockMovieData} />
      </BrowserRouter>,
    );

    expect(Component).toMatchSnapshot();
  });
});
