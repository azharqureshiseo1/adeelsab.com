import { T } from "@/components/T";
import { cities, fleetCities } from "@/content/data/cities";
import { coverage } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Data-driven coverage map. Cities are plotted from real lat/lon in content/data/cities.ts,
 * so adding a city (or flipping `ownFleet`) never requires touching the SVG.
 * The outline is a simplified Pakistan boundary (incl. AJK and Gilgit-Baltistan) for illustration.
 */

const LON0 = 60.5;
const LAT0 = 37.4;
const K = 40; // px per degree
const COS = Math.cos((30 * Math.PI) / 180);

const project = (lon: number, lat: number) => [(lon - LON0) * COS * K, (LAT0 - lat) * K] as const;

// Simplified boundary, clockwise from the Iran border on the Makran coast. [lon, lat]
const BOUNDARY: [number, number][] = [
  [61.61, 25.19], [62.3, 25.1], [63.2, 25.25], [64.1, 25.35], [64.6, 25.2], [65.6, 25.35], [66.4, 25.45],
  [66.65, 25.05], [67.0, 24.85], [67.2, 24.6], [67.45, 24.1], [67.55, 23.8], [68.2, 23.7], [68.75, 24.3],
  [69.6, 24.25], [70.3, 24.35], [71.05, 24.4], [70.9, 25.2], [70.65, 25.7], [70.15, 26.5], [69.55, 27.2],
  [70.0, 27.9], [70.6, 28.0], [71.9, 27.95], [72.9, 28.9], [73.4, 29.95], [73.95, 30.4], [74.6, 30.95],
  [74.55, 31.8], [74.7, 32.5], [74.3, 32.9], [73.95, 33.3], [74.15, 33.6], [73.95, 34.05], [74.3, 34.6],
  [75.2, 34.65], [75.9, 34.85], [76.8, 35.15], [77.05, 35.6], [76.5, 35.9], [76.0, 36.4], [75.45, 36.95],
  [74.8, 37.05], [73.9, 36.9], [72.9, 36.85], [72.0, 36.7], [71.3, 36.2], [71.2, 35.6], [71.6, 35.1],
  [71.05, 34.4], [71.1, 34.05], [70.4, 33.95], [69.95, 33.55], [70.2, 33.15], [69.5, 33.0], [69.3, 31.9],
  [68.8, 31.65], [68.2, 31.8], [67.6, 31.5], [67.0, 31.35], [66.5, 30.95], [66.25, 29.85], [65.0, 29.5],
  [64.1, 29.4], [63.0, 29.5], [62.0, 29.45], [60.87, 29.86], [61.8, 28.65], [62.4, 28.3], [62.8, 27.3],
  [63.3, 26.7], [62.3, 26.4], [61.85, 26.2],
];

const outline = BOUNDARY.map(([lon, lat], i) => {
  const [x, y] = project(lon, lat);
  return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(" ") + " Z";

const WIDTH = Math.ceil((77.6 - LON0) * COS * K);
const HEIGHT = Math.ceil((LAT0 - 23.4) * K);

export function CoverageMap({ className, showList = true }: { className?: string; showList?: boolean }) {
  return (
    <figure className={cn("rounded-card border border-ink-200 bg-white p-4 shadow-soft md:p-6", className)}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby="coverage-map-title"
        className="mx-auto h-auto w-full max-w-[560px]"
      >
        <title id="coverage-map-title">{coverage.mapLabel.en}</title>
        <path d={outline} fill="var(--color-ink-200)" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
        {cities.map((c) => {
          const [x, y] = project(c.lon, c.lat);
          return (
            <g key={c.slug}>
              {c.ownFleet ? (
                <>
                  <circle cx={x} cy={y} r="11" fill="var(--color-brand-500)" opacity="0.2" />
                  <circle cx={x} cy={y} r="5.5" fill="var(--color-brand-500)" stroke="#fff" strokeWidth="1.5" />
                </>
              ) : (
                <circle cx={x} cy={y} r="3.5" fill="var(--color-ink-500)" stroke="#fff" strokeWidth="1" />
              )}
              {c.major && (
                <>
                  <text
                    className="l-en"
                    x={c.labelLeft ? x - 8 : x + 8}
                    y={y + 4}
                    textAnchor={c.labelLeft ? "end" : "start"}
                    fontSize="12"
                    fontWeight="600"
                    fill="var(--color-ink-800)"
                    style={{ fontFamily: "var(--font-sans)" }}
                    paintOrder="stroke"
                    stroke="#F1F4F7"
                    strokeWidth="3"
                  >
                    {c.name}
                  </text>
                  <text
                    className="l-ur"
                    x={c.labelLeft ? x - 8 : x + 8}
                    y={y + 5}
                    textAnchor={c.labelLeft ? "end" : "start"}
                    direction="ltr"
                    fontSize="13"
                    fill="var(--color-ink-800)"
                    style={{ fontFamily: "var(--font-urdu)" }}
                    paintOrder="stroke"
                    stroke="#F1F4F7"
                    strokeWidth="3"
                  >
                    {c.ur}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-4 space-y-2 text-sm">
        <p className="flex flex-wrap items-center gap-x-2 text-ink-700">
          <span className="inline-block size-3 shrink-0 rounded-full bg-brand-500" aria-hidden />
          <T v={coverage.legendFleet} />
          {fleetCities.length === 0 && (
            <span className="text-ink-500">
              — <T v={coverage.fleetPending} />
            </span>
          )}
        </p>
        <p className="flex items-center gap-2 text-ink-700">
          <span className="inline-block size-3 shrink-0 rounded-sm bg-ink-200" aria-hidden />
          <T v={coverage.legend3pl} />
        </p>
        <p className="text-ink-500">
          <T v={coverage.mapNote} />
        </p>
      </figcaption>
      {showList && (
        <details className="mt-4 border-t border-ink-200 pt-3 text-sm">
          <summary className="cursor-pointer font-semibold text-ink-700">
            <T v={coverage.citiesTitle} /> <span className="latin">({cities.length})</span>
          </summary>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-ink-500 sm:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug} className={cn(c.ownFleet && "font-semibold text-brand-700")}>
                <T v={{ en: c.name, ur: c.ur }} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </figure>
  );
}
