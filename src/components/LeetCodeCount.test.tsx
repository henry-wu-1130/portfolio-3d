import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

// Mock fetch
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

describe('LeetCodeCount', () => {
  it('renders the fetched totalSolved value', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ totalSolved: 123 }),
    });
    const LeetCodeCount = (await import('./LeetCodeCount')).default;
    render(<LeetCodeCount />);
    await waitFor(() => {
      expect(screen.getByText('123+')).toBeInTheDocument();
    });
  });

  it('renders fallback value when fetch fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('fail'));
    const LeetCodeCount = (await import('./LeetCodeCount')).default;
    render(<LeetCodeCount />);
    await waitFor(() => {
      expect(screen.getByText('95+')).toBeInTheDocument();
    });
  });

  it('renders fallback value when API returns invalid structure', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ totalSolved: null }),
    });
    const LeetCodeCount = (await import('./LeetCodeCount')).default;
    render(<LeetCodeCount />);
    await waitFor(() => {
      expect(screen.getByText('95+')).toBeInTheDocument();
    });
  });

  it('renders fallback value when response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({})
    });
    const LeetCodeCount = (await import('./LeetCodeCount')).default;
    render(<LeetCodeCount />);
    await waitFor(() => {
      expect(screen.getByText('95+')).toBeInTheDocument();
    });
  });

  it('renders fallback value initially', async () => {
    const LeetCodeCount = (await import('./LeetCodeCount')).default;
    render(<LeetCodeCount />);
    expect(screen.getByText('95+')).toBeInTheDocument();
  });
});
