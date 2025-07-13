import { Component, type ReactNode } from 'react';
import ErrorUI from '../error-ui/error-ui';

type ErrorBoundaryProperties = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProperties, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You could also log error to an error reporting service here
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorUI error={this.state.error?.message || 'Something went wrong'} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
