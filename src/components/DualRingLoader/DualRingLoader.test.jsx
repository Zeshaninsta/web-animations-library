import React from 'react';
import { render } from '@testing-library/react';
import DualRingLoader from './DualRingLoader';

test('renders dual ring loader', () => {
    const { getByTestId } = render(<DualRingLoader />);
    const ringElement = getByTestId('dual-ring-loader');

    expect(ringElement).toBeInTheDocument();
});
