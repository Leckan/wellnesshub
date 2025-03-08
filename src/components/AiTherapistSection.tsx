'use client';

import { SignInButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import dynamic from "next/dynamic";

const AiTherapist = dynamic(() => import("./AiTherapist"), { ssr: false });

export default function AiTherapistSection() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (!isSignedIn) {
    return (
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              AI Wellness Guide
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
              Sign in to chat with our AI wellness guide, trained in multiple therapeutic modalities.
            </p>
            <div className="mt-8">
              <SignInButton mode="modal">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign in to Start
                </button>
              </SignInButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            AI Wellness Guide
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
            Chat with our AI wellness guide, trained in multiple therapeutic modalities.
          </p>
        </div>
        <div className="mt-8">
          <AiTherapist />
        </div>
      </div>
    </section>
  );
}
