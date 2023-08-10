import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Catagories from '../components/Catagories';

const mockStore = configureStore([]);

describe('testing Catagories.js', () => {
  it('should display buttons of catagories', () => {
    const mockMovies = [
      {
        genre: 'Comedy',
      },
      {
        genre: 'Crime',
      },
      {
        genre: 'Adventure',
      },
    ];
    const store = mockStore({
      movies: { movies: mockMovies },
    });

    render(
      <Provider store={store}>
        <Catagories />
      </Provider>,
    );

    const button = screen.getAllByRole('button');
    const btn1 = screen.getByText('All');
    const btn2 = screen.getByText('Comedy');
    const btn3 = screen.getByText('Adventure');
    const btn4 = screen.getByText('Crime');

    expect(button).toHaveLength(4);
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(btn3).toBeInTheDocument();
    expect(btn4).toBeInTheDocument();
  });
});
