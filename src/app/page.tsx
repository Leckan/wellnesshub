import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import AiTherapistSection from '@/components/AiTherapistSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your Personal Wellness Journey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Access personalized mental health support and resources through our AI-powered platform
            </p>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </section>

        {/* Resources Grid */}
        <section id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Wellness Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Therapy Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-48 bg-indigo-100 dark:bg-indigo-900 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI Wellness Guide</h3>
              <p className="text-gray-600 dark:text-gray-300">Chat with our AI guide trained in multiple therapeutic modalities.</p>
            </div>

            {/* Meditation Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-48 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Meditation Guides</h3>
              <p className="text-gray-600 dark:text-gray-300">Discover peace and mindfulness through guided meditation practices.</p>
            </div>

            {/* Journaling Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-48 bg-green-100 dark:bg-green-900 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Journaling Prompts</h3>
              <p className="text-gray-600 dark:text-gray-300">Express yourself through therapeutic writing exercises.</p>
            </div>
          </div>
        </section>

        {/* AI Therapist Section */}
        <AiTherapistSection />

        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-blue-50 dark:bg-gray-800/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Our Platform</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We're dedicated to providing accessible mental health support through innovative technology.
              Our AI-powered platform combines evidence-based therapeutic approaches with personalized guidance
              to support your mental health journey.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} WellnessHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
