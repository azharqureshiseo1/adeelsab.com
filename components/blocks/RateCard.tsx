import { T } from "@/components/T";
import { Table } from "@/components/ui/Table";
import { TodoMark } from "@/components/ui/Fact";
import { rateCard, zones } from "@/content/data/shipping";
import { delivery } from "@/content/site";
import { formatPKR } from "@/lib/utils";

/** Weight-banded rate card, driven by content/data/shipping.ts. */
export function RateCard() {
  return (
    <Table
      head={[
        <T key="w" v={delivery.rates.weight} />,
        ...zones.map((z) => (
          <span key={z.key} className="block">
            <T v={z.label} />
            <span className="block text-xs font-normal text-ink-500">
              <T v={z.note} />
            </span>
          </span>
        )),
      ]}
      caption={<T v={delivery.rates.title} />}
    >
      {rateCard.map((band) => (
        <tr key={band.label}>
          <th scope="row" className="latin text-start font-medium whitespace-nowrap text-ink-900">
            {band.label}
          </th>
          {zones.map((z) => {
            const rate = band.rates[z.key];
            return (
              <td key={z.key} className="tabular">
                {rate !== null ? (
                  <span className="latin font-semibold text-ink-900">{formatPKR(rate)}</span>
                ) : (
                  <TodoMark label="Rate" />
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </Table>
  );
}
