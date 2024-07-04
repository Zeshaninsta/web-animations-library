import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import CircleLoadingAnimation from './CircleLoadingAnimation';

test('renders circle loading animation', () => {
    const { getByTestId } = render(<CircleLoadingAnimation />);
    const circleElement = getByTestId('circle-loading-animation');

    expect(circleElement).toBeInTheDocument();
});
