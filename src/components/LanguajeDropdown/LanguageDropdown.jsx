import { useState, useRef, useEffect } from 'react';
import './LanguajeDropdown.css';

export function LanguageDropdown({ language }) {
  const [selectedLanguage, setSelectedLanguage] = useState('ES');
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedLanguage(language === 'en' ? 'EN' : 'ES');
  }, [language]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log('isOpen', isOpen);
  };

  const handleOutsideClick = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="dropdown-container"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="select-dropdown" onClick={toggleDropdown} aria-expanded={isOpen}>
        {selectedLanguage}
        <img src="/chevron-down.svg" alt="" className="size-4 ml-1" />
      </button>
      {isOpen && (
        <div className={`dropdown-body ${isHovered ? 'dropdown-body-hover' : ''}`}>
          <div className="dropdown-body-content">
            <a href="/">ES</a>
          </div>
          <div className="dropdown-body-content">
            <a href="/en">EN</a>
          </div>
        </div>
      )}
    </div>
  );
}
