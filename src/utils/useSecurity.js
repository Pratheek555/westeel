import { useEffect } from 'react';

export function useSecurity() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Prevent F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
      }
      
      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P
      if (e.ctrlKey) {
        if (e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
          e.preventDefault();
        }
        if (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's' || e.key === 'P' || e.key === 'p') {
          e.preventDefault();
        }
      }

      // Prevent Print Screen (for some browsers/OS)
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        copyToClipboard();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        copyToClipboard();
      }
    };

    const copyToClipboard = () => {
      try {
        navigator.clipboard.writeText('Screenshots are disabled on this website.');
      } catch (err) {
        // Silently fail
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
}
