export function AuroraBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 h-full w-full select-none overflow-hidden"
        >
            <svg
                className="h-full w-full opacity-40 dark:opacity-60"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="aurora-blur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur
                            stdDeviation="80"
                            edgeMode="duplicate"
                            result="blur"
                        />
                    </filter>

                    {/* Core Green Gradient from Brand Kit */}
                    <linearGradient id="core-green" x1="0%" y1="0%" x2="100%" y2="0%">
                        {/* #6DC761 (Primary Green) */}
                        <stop offset="0%" stopColor="#6DC761" stopOpacity="0.4" />
                        {/* #4ADE80 (Soft Green) */}
                        <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.3" />
                        {/* #2BBBC0 (Teal) */}
                        <stop offset="100%" stopColor="#2BBBC0" stopOpacity="0.4" />
                    </linearGradient>

                    {/* Secondary Blue Gradient - Made comparable to Green */}
                    <linearGradient id="cool-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                        {/* #2BBBC0 (Teal - connecting to green) */}
                        <stop offset="0%" stopColor="#2BBBC0" stopOpacity="0.3" />
                        {/* #5B8DEF (Cool Blue - Core) */}
                        <stop offset="50%" stopColor="#5B8DEF" stopOpacity="0.4" />
                        {/* #5B8DEF (Cool Blue - Fade) */}
                        <stop offset="100%" stopColor="#5B8DEF" stopOpacity="0.1" />
                    </linearGradient>

                    {/* Warm Hints (Distant) */}
                    <linearGradient id="warm-hints" x1="100%" y1="0%" x2="0%" y2="100%">
                        {/* #D247AA (Warm Magenta) - Very faint */}
                        <stop offset="0%" stopColor="#D247AA" stopOpacity="0.15" />
                        {/* #FAC124 (Warm Yellow) - Very faint */}
                        <stop offset="50%" stopColor="#FAC124" stopOpacity="0.1" />
                        {/* #FD7436 (Warm Orange) - Fades out */}
                        <stop offset="100%" stopColor="#FD7436" stopOpacity="0.0" />
                    </linearGradient>
                </defs>

                <g filter="url(#aurora-blur)">
                    {/* 
            Layer 1: The "Curtain" Base (Core Greens)
            Wide, sweeping shape across the top/middle
          */}
                    <path
                        fill="url(#core-green)"
                        d="M-100,0 C200,300 500,100 800,200 S1200,0 1200,0 L1200,-200 L-100,-200 Z"
                        transform="translate(0, 100)"
                    />

                    {/* 
            Layer 2: Vertical Pillars (Teal/Green mix)
            Simulating the vertical light shafts of an aurora
          */}
                    <ellipse
                        cx="200"
                        cy="0"
                        rx="300"
                        ry="600"
                        fill="#2BBBC0"
                        fillOpacity="0.2"
                        transform="rotate(-15 200 0)"
                    />
                    <ellipse
                        cx="800"
                        cy="100"
                        rx="400"
                        ry="700"
                        fill="#4ADE80"
                        fillOpacity="0.15"
                        transform="rotate(10 800 100)"
                    />

                    {/* 
             Layer 3: Cool Blue Depth (More prominent now)
             Shifted slightly to balance the greens
          */}
                    <ellipse
                        cx="600"
                        cy="800"
                        rx="700"
                        ry="500"
                        fill="url(#cool-blue)"
                        transform="rotate(-10 600 800)"
                    />

                    {/* 
             Layer 4: Distant Warmth (Top Right Edge/Corner)
             Extremely subtle hint of the warm palette
          */}
                    <circle
                        cx="1000"
                        cy="0"
                        r="400"
                        fill="url(#warm-hints)"
                        opacity="0.6"
                    />
                </g>
            </svg>
        </div>
    );
}
