import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="container">
            <div className="error-content">
              <h1>Something went wrong</h1>
              <p>We're sorry, but something unexpected happened. Please try again.</p>
              <div className="error-actions">
                <button onClick={this.handleRetry} className="retry-btn">
                  Reload Page
                </button>
                <Link to="/" className="home-link">
                  Go to Homepage
                </Link>
              </div>
              <details className="error-details">
                <summary>Technical Details</summary>
                <pre>{this.state.error?.toString()}</pre>
              </details>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;