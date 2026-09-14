import { BadgeCheck } from "lucide-react";
import { T } from "@/components/T";
import { Table } from "@/components/ui/Table";
import { TodoMark } from "@/components/ui/Fact";
import { categories } from "@/content/data/categories";
import { commissionTable } from "@/content/site";
import { factVars } from "@/lib/facts";

/** Full commission table by category — always visible, never behind a click. */
export function CommissionTable({ showFounding = true }: { showFounding?: boolean }) {
  return (
    <div>
      <Table
        head={[<T key="c" v={commissionTable.category} />, <T key="r" v={commissionTable.rate} />]}
        caption={<T v={commissionTable.caption} />}
      >
        {categories.map((c) => (
          <tr key={c.slug}>
            <th scope="row" className="text-start font-medium text-ink-900">
              <T v={{ en: c.en, ur: c.ur }} />
            </th>
            <td className="tabular">
              {c.commission !== null ? (
                <span className="latin font-semibold text-ink-900">{c.commission}%</span>
              ) : (
                <TodoMark label={`${c.en} %`} />
              )}
            </td>
          </tr>
        ))}
      </Table>
      {showFounding && (
        <p className="mt-3 flex gap-2 rounded-xl bg-brand-50 px-4 py-3 text-[15px] text-ink-800">
          <BadgeCheck size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
          <span>
            <T v={commissionTable.foundingNote} vars={factVars} />
          </span>
        </p>
      )}
      <p className="text-small mt-3 text-ink-500">
        <T v={commissionTable.note} />
      </p>
    </div>
  );
}
