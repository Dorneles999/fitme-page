import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Posts from './Posts';

test('renders posts', async () => {
  render(<Posts />);

  // Wait for the loading state to resolve
  await waitFor(() => expect(screen.queryByText(/Loading/)).toBeNull());

  // Check if posts are rendered
  expect(screen.getByText(/Posts/)).toBeInTheDocument();
});
