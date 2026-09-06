import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-6">

          <h1 className="text-5xl font-bold text-pink-600">
            Oops!
          </h1>

          <p className="mt-4 text-gray-600 text-lg text-center">
            Something went wrong.
            <br />
            Please refresh the page.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-8 px-8 py-4 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition"
          >
            Refresh
          </button>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;