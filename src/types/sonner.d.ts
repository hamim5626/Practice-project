declare module 'sonner' {
  export const toast: {
    error: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    info: (message: string) => void;
  };
} 