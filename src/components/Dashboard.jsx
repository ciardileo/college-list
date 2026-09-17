import React from 'react';
import { ArrowRight, GraduationCap, Flame, Compass, Shield } from 'lucide-react';

export default function Dashboard({ colleges, setCurrentIndex }) {
  // Count categories
  const mostSelective = colleges.filter(c => c.fitCategory.toLowerCase().includes('most'));
  const verySelective = colleges.filter(c => c.fitCategory.toLowerCase().includes('very'));
  const selective = colleges.filter(c => !c.fitCategory.toLowerCase().includes('most') && !c.fitCategory.toLowerCase().includes('very'));

  const handleSelectCollege = (collegeId) => {
    const idx = colleges.findIndex(c => c.id === collegeId);
    if (idx !== -1) {
      setCurrentIndex(idx + 2); // 0 is StartPage, 1 is CharacterSheet, 2+ are colleges
    }
  };

  return (
    <div className="dashboard-container fade-in">
      {/* Overview Cards Row */}
      <div className="dashboard-summary-cards">
        {/* Total Card */}
        <div className="dash-summary-card glass-panel" style={{ borderBottom: '3px solid var(--color-primary)' }}>
          <div className="dash-summary-icon-wrap" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--color-primary)' }}>
            <GraduationCap size={24} />
          </div>
          <div className="dash-summary-meta">
            <span className="dash-summary-title">Total List Size</span>
            <span className="dash-summary-val">{colleges.length}</span>
          </div>
        </div>

        {/* Most Selective Card */}
        <div className="dash-summary-card glass-panel" style={{ borderBottom: '3px solid var(--color-reach)' }}>
          <div className="dash-summary-icon-wrap" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-reach)' }}>
            <Flame size={24} />
          </div>
          <div className="dash-summary-meta">
            <span className="dash-summary-title">Most Selective</span>
            <span className="dash-summary-val">{mostSelective.length}</span>
          </div>
        </div>

        {/* Very Selective Card */}
        <div className="dash-summary-card glass-panel" style={{ borderBottom: '3px solid var(--color-target)' }}>
          <div className="dash-summary-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--color-target)' }}>
            <Compass size={24} />
          </div>
          <div className="dash-summary-meta">
            <span className="dash-summary-title">Very Selective</span>
            <span className="dash-summary-val">{verySelective.length}</span>
          </div>
        </div>

        {/* Selective Card */}
        <div className="dash-summary-card glass-panel" style={{ borderBottom: '3px solid var(--color-safety)' }}>
          <div className="dash-summary-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-safety)' }}>
            <Shield size={24} />
          </div>
          <div className="dash-summary-meta">
            <span className="dash-summary-title">Selective</span>
            <span className="dash-summary-val">{selective.length}</span>
          </div>
        </div>
      </div>

      {/* Columns Grid */}
      <div className="dashboard-grid">
        {/* Most Selective Column */}
        <div className="dash-category-column">
          <div className="dash-column-header">
            <div className="dash-column-title" style={{ color: 'var(--color-reach)' }}>
              <Flame size={18} />
              <span>Most Selective</span>
            </div>
            <span className="dash-column-count">{mostSelective.length}</span>
          </div>
          <div className="dash-college-list">
            {mostSelective.map((college) => (
              <div 
                key={college.id} 
                className="dash-college-card glass-panel glass-card-interactive"
                onClick={() => handleSelectCollege(college.id)}
                style={{ borderLeft: `3px solid ${college.accentColor}` }}
              >
                <div className="dash-college-info">
                  <div className="dash-college-name-row">
                    <span className="dash-college-name">{college.name}</span>
                    <span className={`dash-round-pill round-${(college.applicationRound || 'RD').toLowerCase()}`}>
                      {college.applicationRound || 'RD'}
                    </span>
                  </div>
                  <span className="dash-college-loc">
                    {college.location} • {college.quickStats.acceptanceRate} Acc. • Essays: {college.supplementalEssays || '0/3'}
                  </span>
                </div>
                <ArrowRight className="dash-college-action" size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Very Selective Column */}
        <div className="dash-category-column">
          <div className="dash-column-header">
            <div className="dash-column-title" style={{ color: 'var(--color-target)' }}>
              <Compass size={18} />
              <span>Very Selective</span>
            </div>
            <span className="dash-column-count">{verySelective.length}</span>
          </div>
          <div className="dash-college-list">
            {verySelective.map((college) => (
              <div 
                key={college.id} 
                className="dash-college-card glass-panel glass-card-interactive"
                onClick={() => handleSelectCollege(college.id)}
                style={{ borderLeft: `3px solid ${college.accentColor}` }}
              >
                <div className="dash-college-info">
                  <div className="dash-college-name-row">
                    <span className="dash-college-name">{college.name}</span>
                    <span className={`dash-round-pill round-${(college.applicationRound || 'RD').toLowerCase()}`}>
                      {college.applicationRound || 'RD'}
                    </span>
                  </div>
                  <span className="dash-college-loc">
                    {college.location} • {college.quickStats.acceptanceRate} Acc. • Essays: {college.supplementalEssays || '0/3'}
                  </span>
                </div>
                <ArrowRight className="dash-college-action" size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Selective Column */}
        <div className="dash-category-column">
          <div className="dash-column-header">
            <div className="dash-column-title" style={{ color: 'var(--color-safety)' }}>
              <Shield size={18} />
              <span>Selective</span>
            </div>
            <span className="dash-column-count">{selective.length}</span>
          </div>
          <div className="dash-college-list">
            {selective.length > 0 ? selective.map((college) => (
              <div 
                key={college.id} 
                className="dash-college-card glass-panel glass-card-interactive"
                onClick={() => handleSelectCollege(college.id)}
                style={{ borderLeft: `3px solid ${college.accentColor}` }}
              >
                <div className="dash-college-info">
                  <div className="dash-college-name-row">
                    <span className="dash-college-name">{college.name}</span>
                    <span className={`dash-round-pill round-${(college.applicationRound || 'RD').toLowerCase()}`}>
                      {college.applicationRound || 'RD'}
                    </span>
                  </div>
                  <span className="dash-college-loc">
                    {college.location} • {college.quickStats.acceptanceRate} Acc. • Essays: {college.supplementalEssays || '0/3'}
                  </span>
                </div>
                <ArrowRight className="dash-college-action" size={16} />
              </div>
            )) : (
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', padding: '12px 0' }}>
                No universities in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
