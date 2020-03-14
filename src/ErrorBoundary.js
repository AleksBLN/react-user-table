import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    return this.state.hasError
      ? <h1>Something went wrong.</h1>
      : this.props.children
  }
}

export default ErrorBoundary;
