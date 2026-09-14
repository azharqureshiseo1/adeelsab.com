/**
 * Cities used by the waitlist form (allowed list) and the coverage map.
 *
 * `ownFleet` — set to true ONLY for cities where the in-house fleet is confirmed
 * at launch. Until then every city shows as 3PL coverage. (CONTENT-TODO #2)
 * Coordinates are real (decimal degrees) so cities can be added without editing the SVG.
 */
export type City = {
  slug: string;
  name: string;
  ur: string;
  lat: number;
  lon: number;
  ownFleet: boolean;
  /** Label shown on the map at desktop size. */
  major?: boolean;
  /** Put the map label on the left of the dot to avoid collisions. */
  labelLeft?: boolean;
};

export const cities: City[] = [
  { slug: "karachi", name: "Karachi", ur: "کراچی", lat: 24.86, lon: 67.01, ownFleet: false, major: true },
  { slug: "lahore", name: "Lahore", ur: "لاہور", lat: 31.55, lon: 74.34, ownFleet: false, major: true },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    ur: "فیصل آباد",
    lat: 31.42,
    lon: 73.08,
    ownFleet: false,
    major: true,
    labelLeft: true,
  },
  { slug: "rawalpindi", name: "Rawalpindi", ur: "راولپنڈی", lat: 33.6, lon: 73.04, ownFleet: false },
  { slug: "islamabad", name: "Islamabad", ur: "اسلام آباد", lat: 33.68, lon: 73.05, ownFleet: false, major: true },
  { slug: "multan", name: "Multan", ur: "ملتان", lat: 30.2, lon: 71.47, ownFleet: false, major: true },
  { slug: "gujranwala", name: "Gujranwala", ur: "گوجرانوالہ", lat: 32.16, lon: 74.19, ownFleet: false },
  {
    slug: "peshawar",
    name: "Peshawar",
    ur: "پشاور",
    lat: 34.01,
    lon: 71.58,
    ownFleet: false,
    major: true,
    labelLeft: true,
  },
  { slug: "quetta", name: "Quetta", ur: "کوئٹہ", lat: 30.18, lon: 66.98, ownFleet: false, major: true },
  { slug: "sialkot", name: "Sialkot", ur: "سیالکوٹ", lat: 32.49, lon: 74.53, ownFleet: false },
  { slug: "hyderabad", name: "Hyderabad", ur: "حیدرآباد", lat: 25.4, lon: 68.37, ownFleet: false, major: true },
  { slug: "bahawalpur", name: "Bahawalpur", ur: "بہاولپور", lat: 29.4, lon: 71.68, ownFleet: false },
  { slug: "sargodha", name: "Sargodha", ur: "سرگودھا", lat: 32.08, lon: 72.67, ownFleet: false },
  { slug: "sukkur", name: "Sukkur", ur: "سکھر", lat: 27.7, lon: 68.86, ownFleet: false, major: true },
  { slug: "abbottabad", name: "Abbottabad", ur: "ایبٹ آباد", lat: 34.15, lon: 73.22, ownFleet: false },
  { slug: "mardan", name: "Mardan", ur: "مردان", lat: 34.2, lon: 72.04, ownFleet: false },
  { slug: "sahiwal", name: "Sahiwal", ur: "ساہیوال", lat: 30.66, lon: 73.11, ownFleet: false },
  { slug: "gujrat", name: "Gujrat", ur: "گجرات", lat: 32.57, lon: 74.08, ownFleet: false },
  { slug: "rahim-yar-khan", name: "Rahim Yar Khan", ur: "رحیم یار خان", lat: 28.42, lon: 70.3, ownFleet: false },
  { slug: "sheikhupura", name: "Sheikhupura", ur: "شیخوپورہ", lat: 31.71, lon: 73.98, ownFleet: false },
  { slug: "dera-ghazi-khan", name: "Dera Ghazi Khan", ur: "ڈیرہ غازی خان", lat: 30.05, lon: 70.63, ownFleet: false },
  { slug: "larkana", name: "Larkana", ur: "لاڑکانہ", lat: 27.56, lon: 68.21, ownFleet: false },
  { slug: "mirpur", name: "Mirpur (AJK)", ur: "میرپور (آزاد کشمیر)", lat: 33.15, lon: 73.75, ownFleet: false },
  { slug: "muzaffarabad", name: "Muzaffarabad", ur: "مظفرآباد", lat: 34.37, lon: 73.47, ownFleet: false },
  { slug: "gilgit", name: "Gilgit", ur: "گلگت", lat: 35.92, lon: 74.31, ownFleet: false },
];

/** Form option for anyone outside the listed cities. */
export const OTHER_CITY = { slug: "other", name: "Other city", ur: "دوسرا شہر" } as const;

export const allowedCitySlugs: string[] = [...cities.map((c) => c.slug), OTHER_CITY.slug];

export const fleetCities = cities.filter((c) => c.ownFleet);
