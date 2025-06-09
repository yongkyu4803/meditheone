import { render, screen } from '@testing-library/react';
import Header from '@/components/Header/Header';

jest.mock('next/navigation', () => ({
  usePathname() {
    return '/';
  },
}));

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />);
    expect(screen.getByText('MEDITHEONE')).toBeInTheDocument();
  });
});
