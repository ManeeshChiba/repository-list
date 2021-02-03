import { render, screen } from '@testing-library/react';
import Card from './index';

test('renders learn react link', () => {
  render(<Card
    name={'example name'}
    description={'example descirption'}
    stargazers={10}
    watchers={12}
  />);
  const cardTitle = screen.getByText(/example name/i);
  expect(cardTitle).toBeInTheDocument();
});
