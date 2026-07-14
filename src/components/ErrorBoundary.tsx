"use client";

import { Component, ReactNode, ErrorInfo } from "react";
import Link from "next/link";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-[#0B2A4A] mb-4">Something went wrong</h1>
            <p className="text-[#1C1C1C]/80 mb-6">
              We apologize for the inconvenience. Please try refreshing the page or
              <Link href="/" className="text-[#E4572E] underline">
                return to the homepage
              </Link>
              .
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#E4572E]/90 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}