import React from 'react';

/**
 * Parses markdown-style links like [link text](url) into React elements with anchor tags.
 * Falls back to returning the text directly if no links are matched.
 * 
 * @param {string} text The string to parse
 * @returns {React.ReactNode} Parsed nodes or original string
 */
export function parseMarkdownLinks(text) {
  if (!text || typeof text !== 'string') return text;
  
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(text)) !== null) {
    // Add text preceding the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add anchor element
    parts.push(
      <a 
        key={match.index} 
        href={match[2]} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-link"
        onClick={(e) => e.stopPropagation()} // Prevent card navigation click conflicts if any
      >
        {match[1]}
      </a>
    );
    
    lastIndex = linkRegex.lastIndex;
  }
  
  // Add trailing text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
}
