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
  payoutDays: <Fact f={facts.payoutCycleDays} />,
  minPayout: <Fact f={facts.minPayout} />,
  rtoCharge: <Fact f={facts.rtoCharge} />,
  codDays: <Fact f={facts.codRemittanceDays} />,
  listingFee: <Fact f={facts.listingFee} />,
  holdDays: <Fact f={facts.holdPeriodDays} />,
  codFee: <Fact f={facts.codFee} />,
  payoutFee: <Fact f={facts.payoutFee} />,
  attempts: <Fact f={facts.deliveryAttempts} />,
  returnDays: <Fact f={facts.returnWindowDays} />,
  returnPayer: <Fact f={facts.returnShippingPayer} />,
  months: <Fact f={facts.foundingCommissionMonths} />,
  foundingRate: <Fact f={facts.foundingCommissionRate} />,
  cap: <Fact f={facts.foundingCap} />,
  registered: <Fact f={facts.foundingRegistered} />,
  launchDate: <Fact f={facts.launchDate} />,
  officeHours: <Fact f={facts.officeHours} />,
  fleetCities: <FleetCities />,
};

/** Plain-text equivalents for metadata and JSON-LD, where markup can't be used. */
export function factText(text: string): string {
  const map: Record<string, string | null> = {
    payoutDays: facts.payoutCycleDays.value,
    minPayout: facts.minPayout.value,
    rtoCharge: facts.rtoCharge.value,
    codDays: facts.codRemittanceDays.value,
    listingFee: facts.listingFee.value,
    holdDays: facts.holdPeriodDays.value,
    codFee: facts.codFee.value,
    payoutFee: facts.payoutFee.value,
    attempts: facts.deliveryAttempts.value,
    returnDays: facts.returnWindowDays.value,
    returnPayer: facts.returnShippingPayer.value,
    months: facts.foundingCommissionMonths.value,
    foundingRate: facts.foundingCommissionRate.value,
    cap: facts.foundingCap.value,
    registered: facts.foundingRegistered.value,
    launchDate: facts.launchDate.value,
    officeHours: facts.officeHours.value,
    fleetCities: fleetCities.length ? fleetCities.map((c) => c.name).join(", ") : null,
  };
  return text.replace(/\{(\w+)\}/g, (_, key: string) => map[key] ?? "(to be confirmed)");
}
