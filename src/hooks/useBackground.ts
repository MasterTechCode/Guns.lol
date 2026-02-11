import { useState, useEffect } from 'react';

interface BackgroundOptions {
  type: 'video' | 'image';
  src: string;
}

export function useBackground(options: BackgroundOptions) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (options.type === 'image') {
      const img = new Image();
      img.src = options.src;
      
      img.onload = () => {
        setIsLoaded(true);
        setError(null);
      };
      
      img.onerror = () => {
        setError(new Error('Failed to load background image'));
        setIsLoaded(false);
      };
    } else {
      // For video, we'll just mark as loaded
      // Actual loading is handled by the video element
      setIsLoaded(true);
    }
  }, [options.src, options.type]);

  return { isLoaded, error };
}
