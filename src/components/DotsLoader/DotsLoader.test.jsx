import React from 'react';
import { render } from '@testing-library/react';
import DotsLoader from './DotsLoader';

test('renders dots loader', () => {
    const { getByTestId } = render(<DotsLoader />);
    const dotsElement = getByTestId('dots-loader');

    expect(dotsElement).toBeInTheDocument();
});
