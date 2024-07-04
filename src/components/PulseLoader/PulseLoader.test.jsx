import React from 'react';
import { render } from '@testing-library/react';
import PulseLoader from './PulseLoader';

test('renders dots loader', () => {
    const { getByTestId } = render(<PulseLoader />);
    const dotsElement = getByTestId('pulse-loader');

    expect(dotsElement).toBeInTheDocument();
});
