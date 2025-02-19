import { createBrowserHistory, BrowserHistory } from "history";

// Create and export the history instance
export const history = createBrowserHistory();

// Export a safe navigation function
export const navigate = (path: string) => {
  if (history) {
    history.push(path);
  }
};

// Make history available globally
declare global {
  interface Window {
    appHistory: BrowserHistory;
  }
}

window.appHistory = history;
