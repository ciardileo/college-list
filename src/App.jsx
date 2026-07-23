import React, { useState, useEffect } from 'react';
import { Compass, ChevronLeft, ChevronRight, User, LayoutGrid, GraduationCap, Sun, Moon, Eye, EyeOff } from 'lucide-react';
import StartPage from './components/StartPage';
import CharacterSheet from './components/CharacterSheet';
import CollegeCard from './components/CollegeCard';
import Dashboard from './components/Dashboard';
import NavigationMap from './components/NavigationMap';
import { collegesData } from './data/collegeData';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // Light theme is default
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Apply theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // Keyboard navigation listener (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < collegesData.length + 2) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Render correct panel based on current index
  // 0: StartPage
  // 1: CharacterSheet (Profile)
  // 2 to 13: Colleges (12 total)
  // 14: Dashboard (Overview)
  const renderContent = () => {
    if (currentIndex === 0) {
      return <StartPage onStart={handleNext} />;
    } else if (currentIndex === 1) {
      return <CharacterSheet />;
    } else if (currentIndex >= 2 && currentIndex <= collegesData.length + 1) {
      const college = collegesData[currentIndex - 2];
      return <CollegeCard college={college} />;
    } else if (currentIndex === collegesData.length + 2) {
      return <Dashboard colleges={collegesData} setCurrentIndex={setCurrentIndex} />;
    }
    return null;
  };

  return (
    <>
      {/* Background ambient glowing mesh (only visible in dark mode via CSS) */}
      <div className="ambient-background">
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>
      </div>

      <div className="app-container">
        {/* App Header (Hide on Start Page for minimalism, toggleable via state) */}
        {currentIndex > 0 && isHeaderVisible && (
          <header className="app-header glass-panel">
            <div className="brand-section">
              <GraduationCap className="brand-icon" size={32} />
              <div>
                <h1 className="brand-title">Academic Journey</h1>
                <div className="brand-subtitle">EducationUSA College List</div>
              </div>
            </div>

            <div className="header-navigation">
              <button 
                className={`nav-btn ${currentIndex === 1 ? 'active' : ''}`}
                onClick={() => setCurrentIndex(1)}
              >
                <User size={16} />
                <span>My Profile</span>
              </button>
              
              <button 
                className={`nav-btn ${currentIndex >= 2 && currentIndex <= collegesData.length + 1 ? 'active' : ''}`}
                onClick={() => setCurrentIndex(2)} // Jump to first college
              >
                <Compass size={16} />
                <span>Universities ({collegesData.length})</span>
              </button>

              <button 
                className={`nav-btn ${currentIndex === collegesData.length + 2 ? 'active' : ''}`}
                onClick={() => setCurrentIndex(collegesData.length + 2)}
              >
                <LayoutGrid size={16} />
                <span>List Overview</span>
              </button>

              <div style={{ width: '1px', height: '24px', background: 'var(--border-light)', margin: '0 8px' }}></div>

              <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="theme-toggle" onClick={() => setIsHeaderVisible(false)} title="Hide Header">
                <EyeOff size={20} />
              </button>
            </div>
          </header>
        )}

        {/* Small floating button to restore header if it is hidden */}
        {!isHeaderVisible && currentIndex > 0 && (
          <button 
            className="header-toggle-float" 
            onClick={() => setIsHeaderVisible(true)} 
            title="Show Header"
          >
            <Eye size={18} />
          </button>
        )}

        {/* Main Content Stage with transition wrapper */}
        <div className="transition-wrapper" key={currentIndex}>
          {renderContent()}
        </div>

        {/* Left & Right arrow floating controls */}
        {currentIndex > 0 && (
          <div className="slide-controls">
            <button 
              className="ctrl-btn" 
              onClick={handlePrev}
              title="Previous Stage (ArrowLeft)"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="ctrl-btn" 
              onClick={handleNext}
              disabled={currentIndex === collegesData.length + 2}
              title="Next Stage (ArrowRight)"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Game Navigation timeline bar at the bottom */}
        {currentIndex > 0 && (
          <NavigationMap 
            currentIndex={currentIndex} 
            setCurrentIndex={setCurrentIndex} 
            colleges={collegesData} 
          />
        )}
      </div>
    </>
  );
}
