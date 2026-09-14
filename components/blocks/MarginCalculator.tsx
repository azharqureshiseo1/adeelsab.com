"use client";

import { useId, useState } from "react";
import { Calculator } from "lucide-react";
import { T } from "@/components/T";
import type { L } from "@/lib/i18n";
import { formatPKR } from "@/lib/utils";

type Copy = { title: L; lead: L; price: L; margin: L; orders: L; perSale: L; perMonth: L; note: L };

const clamp = (n: number, min: number, max: number) => (Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min);

/** Client-side estimate: price × margin % = profit per sale; × delivered orders = monthly. */
export function MarginCalculator({ copy }: { copy: Copy }) {
  const id = useId();
  const [price, setPrice] = useState("2500");
  const [margin, setMargin] = useState("10");
  const [orders, setOrders] = useState("30");

  const p = clamp(parseFloat(price), 0, 10_000_000);
  const m = clamp(parseFloat(margin), 0, 100);
  const o = clamp(parseFloat(orders), 0, 100_000);
  const perSale = (p * m) / 100;
  const perMonth = perSale * o;

  const field =
    "block min-h-12 w-full rounded-input border border-ink-200 bg-white px-3.5 text-lg font-semibold text-ink-900 tabular focus:border-brand-500 focus:ring-3 focus:ring-brand-500/20 focus:outline-none";

  return (
    <div className="grid overflow-hidden rounded-card border border-ink-200 bg-white shadow-soft lg:grid-cols-[1.2fr_1fr]">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Calculator size={24} strokeWidth={1.75} className="text-brand-500" aria-hidden />
          <h3 className="h4">
            <T v={copy.title} />
          </h3>
        </div>
        <p className="text-small mt-2 text-ink-500">
          <T v={copy.lead} />
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor={`${id}-price`} className="mb-1.5 block text-sm font-semibold text-ink-800">
              <T v={copy.price} />
            </label>
            <input
              id={`${id}-price`}
              type="number"
              inputMode="numeric"
              min={0}
              step={50}
              dir="ltr"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={field}
            />
          </div>
          <div>
            <label htmlFor={`${id}-margin`} className="mb-1.5 block text-sm font-semibold text-ink-800">
              <T v={copy.margin} />
            </label>
            <input
              id={`${id}-margin`}
              type="number"
              inputMode="decimal"
              min={0}
              max={100}
              step={0.5}
              dir="ltr"
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
              className={field}
            />
          </div>
          <div>
            <label htmlFor={`${id}-orders`} className="mb-1.5 block text-sm font-semibold text-ink-800">
              <T v={copy.orders} />
            </label>
            <input
              id={`${id}-orders`}
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              dir="ltr"
              value={orders}
              onChange={(e) => setOrders(e.target.value)}
              className={field}
            />
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={40}
          step={0.5}
          value={m}
          onChange={(e) => setMargin(e.target.value)}
          aria-label="Margin percentage"
          className="mt-6 w-full accent-brand-500"
        />
      </div>
      <div className="flex flex-col justify-center gap-6 bg-ink-900 p-6 md:p-8" aria-live="polite">
        <div>
          <p className="text-small text-ink-400">
            <T v={copy.perSale} />
          </p>
          <p className="latin tabular mt-1 text-4xl font-extrabold text-brand-400">{formatPKR(perSale)}</p>
        </div>
        <div>
          <p className="text-small text-ink-400">
            <T v={copy.perMonth} />
          </p>
          <p className="latin tabular mt-1 text-3xl font-extrabold text-white">{formatPKR(perMonth)}</p>
        </div>
        <p className="text-[13px] leading-relaxed text-ink-400">
          <T v={copy.note} />
        </p>
      </div>
    </div>
  );
}
