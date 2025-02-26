type ErrorTranslations = {
  [key: string]: string;
};

const authErrorTranslations: ErrorTranslations = {
  // Email errors
  "auth/invalid-email": "Please enter a valid email address",
  "auth/user-not-found": "No account found with this email",
  "auth/email-already-in-use": "An account with this email already exists",

  // Password errors
  "auth/wrong-password": "Incorrect password",
  "auth/weak-password": "Password should be at least 6 characters",

  // General errors
  "auth/too-many-requests": "Too many attempts. Please try again later",
  "auth/network-request-failed": "Connection error. Please check your internet",
  "auth/internal-error": "Something went wrong. Please try again",
  "auth/operation-not-allowed": "This login method is not enabled",

  // Default error
  default: "An error occurred. Please try again",
};

export const translateAuthError = (errorCode: string): string => {
  return authErrorTranslations[errorCode] || authErrorTranslations["default"];
};
