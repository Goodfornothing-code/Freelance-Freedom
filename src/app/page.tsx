"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveUserRole } from "@/services/blockchain";

export default function Home() {
  const [userType, setUserType] = useState<string | null>(null);
  const router = useRouter();

  // Store user type in localStorage and redirect
  const handleUserTypeSelection = (type: string) => {
    if (typeof window !== 'undefined') {
      // Save user role using blockchain service
      saveUserRole(type);
      
      if (type === 'client') {
        router.push('/jobs/create');
      } else {
        router.push('/jobs/browse');
      }
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">FreelanceFreedom</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Empowering Work with Blockchain
            </h2>
            <p className="mt-5 text-xl text-gray-500">
              A decentralized freelancer marketplace that connects freelancers and clients
              directly using blockchain technology.
            </p>
            
            <div className="mt-10 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">How are you using FreelanceFreedom today?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                {/* Client Option */}
                <div 
                  onClick={() => handleUserTypeSelection('client')}
                  className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all"
                >
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-2 text-black">I'm a Client</h4>
                  <p className="text-gray-600 text-center">I want to post jobs and hire freelancers</p>
                </div>
                
                {/* Job Taker Option */}
                <div 
                  onClick={() => handleUserTypeSelection('freelancer')}
                  className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all"
                >
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-2 text-black">I'm a Freelancer</h4>
                  <p className="text-gray-600 text-center">I want to find jobs and work on projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Why Choose FreelanceFreedom?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Low Fees</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                No more 10-20% platform fees. Pay only for the network gas.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Instant Payments</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Get paid instantly when your work is approved.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Escrow</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Funds are locked in smart contracts until work is completed.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Global Access</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Work with anyone, anywhere, with no geographic restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 FreelanceFreedom. Built for hackathon demonstration.</p>
        </div>
      </footer>
    </div>
  );
}
