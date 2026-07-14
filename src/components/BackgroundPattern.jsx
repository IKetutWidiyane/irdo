import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main mesh/net pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="mesh-pattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid lines */}
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            {/* Small dots at intersections */}
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
            <circle cx="80" cy="0" r="1.5" fill="currentColor" />
            <circle cx="0" cy="80" r="1.5" fill="currentColor" />
            <circle cx="80" cy="80" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
      </svg>

      {/* Second larger mesh layer for depth */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="mesh-pattern-large"
            x="0"
            y="0"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 160 0 L 0 0 0 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="0" cy="0" r="2" fill="currentColor" />
            <circle cx="160" cy="0" r="2" fill="currentColor" />
            <circle cx="0" cy="160" r="2" fill="currentColor" />
            <circle cx="160" cy="160" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-pattern-large)" />
      </svg>

      {/* Diagonal connection lines for "net" effect */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="mesh-diagonal"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 0 L 120 120 M 120 0 L 0 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-diagonal)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;