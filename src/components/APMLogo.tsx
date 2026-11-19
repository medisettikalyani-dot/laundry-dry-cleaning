import React from "react";

interface APMLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

/**
 * APM Laundry & Dry Cleaning Brand Logo
 *
 * Exact recreation of the reference brand mark:
 * 1. Clothes hanger in Burnt Orange (#C74708) crowning over the APM letters.
 * 2. Royal Blue (#2869AE) fabric wave nestled directly beneath the hanger apex.
 * 3. Bold, elegant serif typography for "APM" with a signature upward flourish on the 'M'.
 * 4. Dual sparkle stars (Amber-Orange and Taupe-Charcoal) on the upper right flank.
 * 5. Bold, clean "LAUNDRY & DRY CLEANING" subtitle centered below.
 */
export function APMLogo({
  className = "h-14 w-auto",
  showSubtitle = true,
}: APMLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center select-none aspect-[240/114] ${className}`}>
      <svg
        viewBox="0 0 240 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full object-contain overflow-visible"
        style={{ objectFit: "contain" }}
        aria-label="APM Laundry & Dry Cleaning"
        role="img"
      >
        <defs>
          {/* Subtle gradient for the hanger to give that rich dimensional look */}
          <linearGradient id="hanger-grad" x1="50" y1="5" x2="165" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D9530D" />
            <stop offset="100%" stopColor="#B63B02" />
          </linearGradient>

          {/* Blue fabric wave gradient */}
          <linearGradient id="wave-grad" x1="80" y1="40" x2="170" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E5C9B" />
            <stop offset="60%" stopColor="#2869AE" />
            <stop offset="100%" stopColor="#3B7EC7" />
          </linearGradient>

          {/* Lettering gradient for APM */}
          <linearGradient id="apm-grad" x1="45" y1="45" x2="195" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DD5710" />
            <stop offset="50%" stopColor="#C74708" />
            <stop offset="100%" stopColor="#B33902" />
          </linearGradient>
        </defs>

        {/* ========================================================= */}
        {/* 1. CLOTHES HANGER OVER APM                                */}
        {/* ========================================================= */}
        <g id="hanger">
          {/* Hanger Hook */}
          <path
            d="M 106 27 C 106 17.5, 115 13.5, 115 8.5 C 115 4, 111 2, 106 2 C 101 2, 97.5 5, 97.5 10"
            stroke="url(#hanger-grad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Hanger Shoulders - Arched over APM with characteristic hanger tip notch */}
          <path
            d="M 45 64 C 43 62, 42.5 58, 44.5 56 C 46.5 54, 49 54.5, 51.5 56 L 106 27 L 166 50"
            stroke="url(#hanger-grad)"
            strokeWidth="5.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ========================================================= */}
        {/* 2. ROYAL BLUE FABRIC WAVE                                 */}
        {/* ========================================================= */}
        <g id="blue-wave">
          {/* Smooth contoured fabric wave arching over P and M */}
          <path
            d="M 82 48 C 100 38, 122 36, 142 42.5 C 154 46, 164 47, 170 46 C 161 52.5, 143 51, 128 45 C 112 39.5, 98 43, 82 48 Z"
            fill="url(#wave-grad)"
          />
        </g>

        {/* ========================================================= */}
        {/* 3. "APM" BOLD SERIF LETTERS                               */}
        {/* ========================================================= */}
        <g id="apm-letters" fill="url(#apm-grad)">
          {/* --- LETTER A --- */}
          <path
            d="
              M 42 86 L 42 82.5 L 50 82.5 L 67 48 L 74 48 L 91 82.5 L 98 82.5 L 98 86 L 80 86 L 80 82.5 L 85.5 82.5 L 80.5 72 L 60.5 72 L 55.5 82.5 L 61 82.5 L 61 86 Z
              M 62 68 L 78.5 68 L 70.5 52 Z
            "
          />

          {/* --- LETTER P --- */}
          <path
            d="
              M 98 86 L 98 82.5 L 105 82.5 L 105 52 L 99 52 L 99 48.5 L 122 48.5 C 133 48.5, 139 53, 139 60.5 C 139 68, 132 72.5, 121 72.5 L 115 72.5 L 115 82.5 L 122 82.5 L 122 86 Z
              M 115 68.5 L 120.5 68.5 C 127 68.5, 130 65.5, 130 60.5 C 130 55.5, 127 52.5, 120.5 52.5 L 115 52.5 Z
            "
          />

          {/* --- LETTER M (With Characteristic Elegant Swash) --- */}
          <path
            d="
              M 136 86 L 136 82.5 L 143 82.5 L 143 52 L 137 52 L 137 48.5 L 149 48.5 L 161 74 L 173 48.5 L 184 48.5
              C 189 44.5, 195 43, 200 42 C 201 44.5, 199 47, 196 48.5 C 190.5 51.5, 184 57, 181 64
              L 181 82.5 L 188 82.5 L 188 86 L 171 86 L 171 82.5 L 177 82.5 L 177 56.5 L 164.5 82.5 L 157.5 82.5 L 147 56.5 L 147 82.5 L 153 82.5 L 153 86 Z
            "
          />
        </g>

        {/* ========================================================= */}
        {/* 4. DUAL SPARKLE STARS (TOP RIGHT)                         */}
        {/* ========================================================= */}
        <g id="sparkles">
          {/* Upper Sparkle (Amber-Orange) */}
          <path
            d="M 200 23 Q 200 33 209 33 Q 200 33 200 43 Q 200 33 191 33 Q 200 33 200 23 Z"
            fill="#E0652B"
          />

          {/* Lower Sparkle (Warm Taupe / Charcoal) */}
          <path
            d="M 207 45 Q 207 53 214 53 Q 207 53 207 61 Q 207 53 200 53 Q 207 53 207 45 Z"
            fill="#75675F"
          />
        </g>

        {/* ========================================================= */}
        {/* 5. SUBTITLE: LAUNDRY & DRY CLEANING                       */}
        {/* ========================================================= */}
        {showSubtitle && (
          <text
            x="120"
            y="105"
            textAnchor="middle"
            fill="#202020"
            fontSize="12.5"
            fontWeight="800"
            letterSpacing="2.2"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          >
            LAUNDRY &amp; DRY CLEANING
          </text>
        )}
      </svg>
    </div>
  );
}

export default APMLogo;
