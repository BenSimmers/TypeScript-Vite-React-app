import { render } from '@testing-library/react';

import { AppComponent, MyAppProps } from './AppComponent';
import { useDemoStore } from '../store/demoStore';
import { describe } from 'node:test';

export const MockProps: MyAppProps = {
  reactLogo: 'https://reactjs.org/logo-og.png',
  viteLogo: 'https://vitejs.dev/logo.svg',
  count: 0,
  increment: () => useDemoStore.getState().increment(),
};

describe('AppComponent', () => {
  it('renders without crashing', () => {
    const { container } = render(<AppComponent {...MockProps} />);
    expect(container).toBeInTheDocument();
  });
});
