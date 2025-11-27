import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sessionManager } from '../../utils/sessionManager';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Track page visit in session
    sessionManager.trackPageVisit(pathname);
    
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Focus on main content for accessibility
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;