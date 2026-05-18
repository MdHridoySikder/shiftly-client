import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const PageLoader = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-[#05070a] relative overflow-hidden">
      <div className="absolute w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] animate-pulse" />

      <div className="absolute w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] animate-pulse delay-200" />
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl border-2 border-t-blue-500 border-r-transparent border-b-indigo-500 border-l-transparent animate-spin [animation-duration:1s]" />

        <div className="absolute w-10 h-10 rounded-lg border-2 border-t-transparent border-r-emerald-500 border-b-transparent border-l-purple-500 animate-spin [animation-duration:1.5s] reverse" />

        <span className="font-black text-xl text-white font-mono italic animate-pulse">
          S
        </span>
      </div>

      <p className="mt-6 text-xs text-gray-400 tracking-[0.25em] uppercase font-medium animate-pulse">
        Shifting Waves...
      </p>
    </div>
  );
};

const RootLayouts = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="bg-[#05070a] min-h-screen text-white flex flex-col justify-between pt-20">
      <Navbar />

      <main className="flex-grow w-full">
        {isPageLoading ? (
          <PageLoader />
        ) : (
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RootLayouts;
