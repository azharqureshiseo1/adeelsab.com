import { Fact, TodoMark } from "@/components/ui/Fact";
import { facts } from "@/content/data/facts";
import { fleetCities } from "@/content/data/cities";

function FleetCities() {
  if (fleetCities.length === 0) return <TodoMark label="Own-fleet cities at launch" />;
  return (
    <>
      <span className="l-en">{fleetCities.map((c) => c.name).join(", ")}</span>
      <span className="l-ur" lang="ur">
        {fleetCities.map((c) => c.ur).join("، ")}
      </span>
    </>
  );
}

/** Fills `{token}` placeholders in site copy. Unconfirmed values render a visible TODO marker. */
export const factVars = {
  deliveryCharge: <Fact f={facts.deliveryCharge} />,
  minPayout: <Fact f={facts.minPayout} />,
  rtoCharge: <Fact f={facts.rtoCharge} />,
  codDays: <Fact f={facts.codRemittanceDays} />,
  listingFee: <Fact f={facts.listingFee} />,
  payoutFee: <Fact f={facts.payoutFee} />,
  attempts: <Fact f={facts.deliveryAttempts} />,
  returnDays: <Fact f={facts.returnWindowDays} />,
  months: <Fact f={facts.foundingCommissionMonths} />,
  foundingRate: <Fact f={facts.foundingCommissionRate} />,
  cap: <Fact f={facts.foundingCap} />,
  officeHours: <Fact f={facts.officeHours} />,
  fleetCities: <FleetCities />,
};

/** Plain-text equivalents for metadata and JSON-LD, where markup can't be used. */
export function factText(text: string): string {
  const map: Record<string, string | null> = {
    deliveryCharge: facts.deliveryCharge.value,
    minPayout: facts.minPayout.value,
    rtoCharge: facts.rtoCharge.value,
    codDays: facts.codRemittanceDays.value,
    listingFee: facts.listingFee.value,
    payoutFee: facts.payoutFee.value,
    attempts: facts.deliveryAttempts.value,
    returnDays: facts.returnWindowDays.value,
    months: facts.foundingCommissionMonths.value,
    foundingRate: facts.foundingCommissionRate.value,
    cap: facts.foundingCap.value,
    officeHours: facts.officeHours.value,
    fleetCities: fleetCities.length ? fleetCities.map((c) => c.name).join(", ") : null,
  };
  return text.replace(/\{(\w+)\}/g, (_, key: string) => map[key] ?? "(to be confirmed)");
}
