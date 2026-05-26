import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught runtime error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-beige text-deep-green font-body">
          <span className="material-symbols-outlined text-mustard text-5xl mb-4">warning</span>
          <h2 className="font-heading font-black text-2xl mb-2">Module Load Error</h2>
          <p className="text-sm opacity-70 max-w-md mb-6 leading-relaxed">
            We encountered an unexpected inconsistency while rendering this segment. Please refresh to restore the protocol state.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-green text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:bg-deep-green transition-all"
          >
            Reload Interface
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
