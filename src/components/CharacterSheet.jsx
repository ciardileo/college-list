import React from 'react';
import { Award, CheckCircle, GraduationCap } from 'lucide-react';
import { profileData } from '../data/collegeData';
import { parseMarkdownLinks } from '../utils/textParser';

export default function CharacterSheet() {
  return (
    <div className="page-container fade-in">
      {/* Left Profile Panel (Character Stats) */}
      <div className="character-card glass-panel">
        <div className="profile-avatar-container">
          <img 
            src={profileData.avatar} 
            alt={profileData.name} 
            className="profile-avatar" 
          />
        </div>

        <h2 className="profile-name">{profileData.name}</h2>
        <div className="profile-title">{profileData.title}</div>
        <div className="profile-class">{profileData.classOf}</div>

        <p className="profile-bio">"{parseMarkdownLinks(profileData.bio)}"</p>

        <div className="divider"></div>

        <h3 className="panel-title">
          <GraduationCap size={16} className="brand-icon" />
          Academic Attributes
        </h3>

        <div className="character-stats-grid">
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{parseMarkdownLinks(stat.value)}</div>
            </div>
          ))}
        </div>

        <div className="divider"></div>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
          {parseMarkdownLinks(profileData.advisersNotes)}
        </div>
      </div>

      {/* Right Extracurriculars Panel */}
      <div className="quests-log glass-panel">
        <div className="section-header">
          <div className="section-title-wrap">
            <Award className="section-icon" size={28} />
            <div>
              <h2 className="section-title">Extracurricular Activities</h2>
              <p className="section-subtitle">Key quests completed during high school journey</p>
            </div>
          </div>
        </div>

        <div className="quests-grid">
          {profileData.extracurriculars.map((quest) => (
            <div key={quest.id} className="quest-card glass-card-interactive">
              <div className="quest-meta">
                <span className="quest-org">{parseMarkdownLinks(quest.organization)}</span>
                <span style={{ display: 'flex', color: 'var(--color-text-muted)' }}>
                  <CheckCircle size={16} />
                </span>
              </div>
              <h3 className="quest-title">{quest.title}</h3>
              <p className="quest-desc">{parseMarkdownLinks(quest.description)}</p>
              
              <div className="quest-impact-box">
                <div className="quest-impact-label">Key Outcome / Main Impact</div>
                <div className="quest-impact-text">{parseMarkdownLinks(quest.impact)}</div>
              </div>

              <div className="quest-tags">
                {quest.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
