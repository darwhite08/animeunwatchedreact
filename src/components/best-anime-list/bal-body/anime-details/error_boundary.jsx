import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has been encountered
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information to an external service (optional)
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Display fallback UI
      return (
        <div style={{ padding: "20px", backgroundColor: "#f8d7da", color: "#721c24" }}>
          <h2>Something went wrong!</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; // Render children when there's no error
  }
}

export default ErrorBoundary;
