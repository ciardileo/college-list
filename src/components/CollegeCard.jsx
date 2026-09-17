import React from 'react';
import { MapPin, School, Star, FileText } from 'lucide-react';
import { parseMarkdownLinks } from '../utils/textParser';

export default function CollegeCard({ college }) {
  const getFitPillClass = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes('most')) return 'fit-pill-most-selective';
    if (cat.includes('very')) return 'fit-pill-very-selective';
    if (cat.includes('selective')) return 'fit-pill-selective';
    return '';
  };

  return (
    <div className="college-stage-container fade-in">
      {/* Left Visual Column - Focused on Resized Image */}
      <div className="college-visual-column">
        {/* Hero image card */}
        <div className="college-hero-card">
          <img 
            src={college.image} 
            alt={college.name} 
            className="college-hero-img" 
          />
          <div className="college-hero-overlay">
            <div className="college-hero-badges">
              <span className={`fit-pill ${getFitPillClass(college.fitCategory)}`}>
                {college.fitCategory}
              </span>
              {college.applicationRound && (
                <span className={`round-pill round-${college.applicationRound.toLowerCase()}`}>
                  Round: {college.applicationRound}
                </span>
              )}
              {college.supplementalEssays && (
                <span className="essays-pill">
                  <FileText size={12} /> Essays: {college.supplementalEssays}
                </span>
              )}
            </div>
            <h2 className="college-name-plate">{college.name}</h2>
            <div className="college-loc-type">
              <span>
                <MapPin size={14} /> {college.location}
              </span>
              <span>
                <School size={14} /> {college.type}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid below image */}
        <div className="college-quick-stats">
          <div className="quick-stat-box">
            <div className="quick-stat-label">Acceptance Rate</div>
            <div className="quick-stat-val">{college.quickStats.acceptanceRate}</div>
          </div>
          <div className="quick-stat-box">
            <div className="quick-stat-label">Student:Faculty Ratio</div>
            <div className="quick-stat-val">{college.quickStats.studentFacultyRatio || "8:1"}</div>
          </div>
          <div className="quick-stat-box">
            <div className="quick-stat-label">Application Round</div>
            <div className="quick-stat-val">
              <span className={`round-badge-stat round-${(college.applicationRound || 'RD').toLowerCase()}`}>
                {college.applicationRound || 'RD'}
              </span>
            </div>
          </div>
          <div className="quick-stat-box">
            <div className="quick-stat-label">Supplemental Essays</div>
            <div className="quick-stat-val essays-val">
              <FileText size={14} style={{ color: 'var(--color-target)' }} />
              <span>{college.supplementalEssays || '0/3'}</span>
            </div>
          </div>
          <div className="quick-stat-box">
            <div className="quick-stat-label">Undergrad Size</div>
            <div className="quick-stat-val">{college.quickStats.undergradSize}</div>
          </div>
          <div className="quick-stat-box">
            <div className="quick-stat-label">Financial Aid</div>
            <div className="quick-stat-val" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
              {parseMarkdownLinks(college.quickStats.financialAid)}
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Column - Focused on Fit Reasons */}
      <div className="college-details-column">
        <div className="overview-text">
          {parseMarkdownLinks(college.overview)}
        </div>

        <div className="fit-reasons-box">
          <h3 className="panel-title">
            <Star size={18} style={{ color: 'var(--color-warning)' }} />
            Why I am a Strong Fit (3 Pillars)
          </h3>
          
          <div className="fit-reasons-list">
            {college.threeReasons.map((reason, idx) => (
              <div key={idx} className="fit-reason-card">
                <div className="reason-num">
                  {idx + 1}
                </div>
                <div className="reason-content">
                  <h4 className="reason-title">{reason.title}</h4>
                  <p className="reason-desc">{parseMarkdownLinks(reason.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
