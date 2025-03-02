import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroMainPage from "./components/authentication/landing_page/main";
import LoginSignupPage from "./components/authentication/login_signup/login_signup_page";
import { UserDashboard } from "./components/dashboard/main";
import BestAnimeListPage from "./components/best-anime-list/main";
import Navbar from "./components/navigation/top-bar/main";
import AnimeCountDownPage from "./components/anime_countdown/main";
import AboutUsPage from "./components/about/about_us";
import BlogsSection from "./components/blogs/main";
import MaintenancePage from "./maintenance";

// ✅ Layout Component for pages with Navbar
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* ✅ Routes with Navbar */}
          <Route
            path="/"
            element={
              <MainLayout>
                <HeroMainPage />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <LoginSignupPage />
              </MainLayout>
            }
          />
          <Route
            path="/animecountdown"
            element={
              <MainLayout>
                <AnimeCountDownPage />
              </MainLayout>
            }
          />
          <Route
            path="/bestanimelist/shounen"
            element={
              <MainLayout>
                <BestAnimeListPage />
              </MainLayout>
            }
          />
          <Route
            path="about-us"
            element={
              <MainLayout>
                <div className="mt-14">
                  <AboutUsPage />
                </div>
              </MainLayout>
            }
          />
          <Route
            path="/blog/*"
            element={
                <div className="mt-14">
                  <BlogsSection />
                </div>
            }
          />
          {/* ✅ Routes WITHOUT Navbar */}
          <Route path="/profile/user/*" element={<UserDashboard />} />
          {/* ✅ All Other Routes  */}
        
          <Route path="*" element={< MaintenancePage to={window.location.href }/>} />
        
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
