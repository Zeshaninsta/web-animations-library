# Web Animations Library

A collection of web animations using HTML, CSS, and React components. This library provides a variety of loading animations, button effects, hover animations, and more that can be easily integrated into any web project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [HTML/CSS](#htmlcss)
  - [React Components](#react-components)
- [Animations](#animations)
  - [Loading Animations](#loading-animations)
  - [Button Animations](#button-animations)
  - [Hover Animations](#hover-animations)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Using NPM (for React components)

```bash
npm install web-animations-library
```
# Manual Download (for HTML/CSS)

## Download the repository and include the CSS and HTML files in your project.
*Usage*
**HTML/CSS**

## Include the CSS file in your HTML file:

```html
<link rel="stylesheet" href="path/to/animations.css">
```
**Use the HTML structure for the desired animation from the examples provided in the repository.**

## React Components

**Import the desired component and use it in your React project:**

```jsx
import { LoadingSpinner } from 'web-animations-library';

function App() {
    return (
        <div className="App">
            <LoadingSpinner />
        </div>
    );
}

export default App;
```

# Animations

## Loading Animations

- Circle Loading Spinner
- Dual Ring Loader
- Dots Loader
- Pulse Loader

## Button Animations

- Pulse Button
- Ripple Button
- Bounce Button

## Hover Animations

- Grow Hover
- Shadow Hover
- Swing Hover

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

