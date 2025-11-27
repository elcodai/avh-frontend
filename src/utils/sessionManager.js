// Simple session management for user preferences
class SessionManager {
  constructor() {
    this.storageKey = 'addis_view_hotel_session';
    this.session = this.loadSession();
  }

  loadSession() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : this.createNewSession();
    } catch (error) {
      console.warn('Failed to load session:', error);
      return this.createNewSession();
    }
  }

  createNewSession() {
    return {
      id: this.generateSessionId(),
      createdAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      pageVisits: [],
      preferences: {
        currency: 'USD',
        language: 'en'
      }
    };
  }

  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  updateLastActivity() {
    this.session.lastActivity = new Date().toISOString();
    this.saveSession();
  }

  trackPageVisit(path) {
    this.session.pageVisits.push({
      path,
      timestamp: new Date().toISOString()
    });
    
    // Keep only last 20 page visits
    if (this.session.pageVisits.length > 20) {
      this.session.pageVisits = this.session.pageVisits.slice(-20);
    }
    
    this.updateLastActivity();
    this.saveSession();
  }

  saveSession() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.session));
    } catch (error) {
      console.warn('Failed to save session:', error);
    }
  }

  clearSession() {
    this.session = this.createNewSession();
    this.saveSession();
  }

  getSession() {
    return { ...this.session };
  }
}

export const sessionManager = new SessionManager();