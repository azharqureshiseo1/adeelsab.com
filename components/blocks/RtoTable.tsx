import { T } from "@/components/T";
import { Table } from "@/components/ui/Table";
import { TodoMark } from "@/components/ui/Fact";
import { rtoCharges, zones } from "@/content/data/shipping";
import { localSellers } from "@/content/site";
import { formatPKR } from "@/lib/utils";

/** RTO charge per parcel, by zone. Stated plainly — never softened or omitted. */
export function RtoTable() {
  return (
    <Table head={[<T key="z" v={localSellers.returns.tableZone} />, <T key="c" v={localSellers.returns.tableCharge} />]}>
      {zones.map((z) => {
        const charge = rtoCharges[z.key];
        return (
          <tr key={z.key}>
            <th scope="row" className="text-start font-medium text-ink-900">
              <T v={z.label} />
            </th>
            <td className="tabular">
              {charge !== null ? (
                <span className="latin font-semibold text-ink-900">{formatPKR(charge)}</span>
              ) : (
                <TodoMark label={`RTO charge — ${z.label.en}`} />
              )}
            </td>
          </tr>
        );
      })}
    </Table>
  );
}
