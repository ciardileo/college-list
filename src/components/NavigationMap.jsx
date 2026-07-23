import React from 'react';
import { Home, Compass } from 'lucide-react';

export default function NavigationMap({ currentIndex, setCurrentIndex, colleges }) {
  // Total steps in map: 1 (Profile) + colleges.length (Colleges) + 1 (Overview)
  const totalSteps = 1 + colleges.length + 1;
  
  // Calculate progress percentage starting from index 1 (Profile) to final index (Overview)
  const progressPercent = ((currentIndex - 1) / (totalSteps - 1)) * 100;

  const getBadgeInfo = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes('most')) return { label: 'MS', class: 'badge-most' };
    if (cat.includes('very')) return { label: 'VS', class: 'badge-very' };
    return { label: 'S', class: 'badge-selective' };
  };

  return (
    <div className="map-container glass-panel">
      <div className="map-track">
        {/* Background track line */}
        <div className="map-line-bg"></div>
        {/* Colored progress line */}
        <div className="map-line-progress" style={{ width: `${progressPercent}%` }}></div>

        {/* Start / Profile Node (currentIndex === 1) */}
        <div 
          className={`map-node ${currentIndex === 1 ? 'active' : ''} ${currentIndex > 1 ? 'visited' : ''}`}
          onClick={() => setCurrentIndex(1)}
        >
          <div className="node-dot">
            <Home size={14} />
          </div>
          <span className="node-label">Profile</span>
        </div>

        {/* College Nodes (currentIndex === idx + 2) */}
        {colleges.map((college, idx) => {
          const stepNumber = idx + 2; 
          const isActive = currentIndex === stepNumber;
          const isVisited = currentIndex > stepNumber;
          const badgeInfo = getBadgeInfo(college.fitCategory);

          return (
            <div 
              key={college.id} 
              className={`map-node ${isActive ? 'active' : ''} ${isVisited ? 'visited' : ''}`}
              onClick={() => setCurrentIndex(stepNumber)}
            >
              {/* Badge for selectivity category */}
              <span className={`node-badge ${badgeInfo.class}`}>{badgeInfo.label}</span>
              
              <div className="node-dot">
                {idx + 1}
              </div>
              
              <span className="node-label">{college.shortName}</span>
            </div>
          );
        })}

        {/* Final Overview Dashboard Node (currentIndex === colleges.length + 2) */}
        <div 
          className={`map-node ${currentIndex === colleges.length + 2 ? 'active' : ''}`}
          onClick={() => setCurrentIndex(colleges.length + 2)}
        >
          <div className="node-dot">
            <Compass size={14} />
          </div>
          <span className="node-label">Overview</span>
        </div>
      </div>
    </div>
  );
}
