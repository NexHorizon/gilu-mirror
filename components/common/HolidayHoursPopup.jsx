"use client";

import React, { useEffect, useState } from 'react';
import { RichText } from "@graphcms/rich-text-react-renderer";
import { PopupQuery } from "@/queries/query";
import { useQuery } from "@apollo/client";

const HolidayHoursPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useQuery(PopupQuery);

  useEffect(() => {
    const wasShown = sessionStorage.getItem('holidayPopupShown');
    if (!wasShown && data?.popup?.content?.text) {
      setIsOpen(true);
      sessionStorage.setItem('holidayPopupShown', 'true');
    }
  }, [data]);

  if (loading || error || !isOpen || !data?.popup) return null;

  const popupData = data.popup;

  const richTextRenderers = {
    p: ({ children }) => (
      <p style={{ 
        marginBottom: '12px', 
        lineHeight: '1.5',
        color: '#374151'
      }}>
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 style={{ 
        fontSize: '20px', 
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#111827'
      }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ 
        fontSize: '18px', 
        fontWeight: 'bold',
        marginBottom: '14px',
        color: '#111827'
      }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ 
        fontSize: '16px', 
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#111827'
      }}>
        {children}
      </h3>
    ),
    ul: ({ children }) => (
      <ul style={{ 
        marginBottom: '12px',
        paddingLeft: '20px',
        listStyleType: 'disc'
      }}>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol style={{ 
        marginBottom: '12px',
        paddingLeft: '20px'
      }}>
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li style={{ 
        marginBottom: '8px',
        lineHeight: '1.5'
      }}>
        {children}
      </li>
    ),
    a: ({ children, href }) => (
      <a 
        href={href} 
        style={{ 
          color: '#111827',
          textDecoration: 'underline',
          fontWeight: '500'
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ 
        borderLeft: '4px solid #e5e7eb',
        paddingLeft: '16px',
        margin: '12px 0',
        fontStyle: 'italic',
        color: '#4b5563'
      }}>
        {children}
      </blockquote>
    )
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '500px', width: '90%', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
        <h2 style={{ marginTop: '0', marginBottom: '16px', fontSize: '20px', fontWeight: 'bold', color: '#111827', textAlign: 'center' }}>{popupData?.title || 'Otevírací doba o svátcích'}</h2>
        <div style={{ marginBottom: '20px', maxHeight: '60vh', overflowY: 'auto' }}>
          <RichText 
            content={popupData?.content?.raw} 
            renderers={richTextRenderers}
          />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            backgroundColor: '#111827',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500',
            width: '100%',
            transition: 'background-color 0.2s',
            ':hover': {
              backgroundColor: '#1f2937'
            }
          }}
        >
          Rozumím
        </button>
      </div>
    </div>
  );
};

export default HolidayHoursPopup; 