import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function StartPage({ onStart }) {
  return (
    <div className="start-page-container fade-in" onClick={onStart}>
      <div className="start-page-content">
        <h1 className="start-page-title">Leonardo Ciardi</h1>
        <h2 className="start-page-subtitle">College List Presentation</h2>
        
        <div className="start-page-cta">
          <span>Click anywhere or press Right Arrow to begin</span>
          <ChevronRight className="start-page-icon" size={20} />
        </div>
      </div>
    </div>
  );
}
