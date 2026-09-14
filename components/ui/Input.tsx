import { T } from "@/components/T";
import type { L } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const control =
  "block min-h-12 w-full rounded-input border bg-white px-3.5 py-2.5 text-base text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus-visible:outline-none focus:ring-3 disabled:bg-ink-100";

type FieldProps = {
  id: string;
  label: React.ReactNode;
  optionalLabel?: React.ReactNode;
  error?: L | null;
  className?: string;
};

function Field({
  id,
  label,
  optionalLabel,
  error,
  className,
  children,
}: FieldProps & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label}
        {optionalLabel && <span className="ms-1 font-normal text-ink-500">({optionalLabel})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger" role="alert">
          <T v={error} />
        </p>
      )}
    </div>
  );
}

const state = (error?: L | null) =>
  error ? "border-danger focus:ring-danger/20" : "border-ink-200 hover:border-ink-400 focus:border-brand-500 focus:ring-brand-500/20";

export function Input({
  id,
  label,
  optionalLabel,
  error,
  className,
  ...props
}: FieldProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">) {
  return (
    <Field id={id} label={label} optionalLabel={optionalLabel} error={error} className={className}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, state(error))}
        {...props}
      />
    </Field>
  );
}

export function Select({
  id,
  label,
  optionalLabel,
  error,
  className,
  children,
  ...props
}: FieldProps & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className">) {
  return (
    <Field id={id} label={label} optionalLabel={optionalLabel} error={error} className={className}>
      <div className="relative">
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(control, state(error), "appearance-none pe-10")}
          {...props}
        >
          {children}
        </select>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="pointer-events-none absolute end-3 top-1/2 size-5 -translate-y-1/2 text-ink-400"
          fill="currentColor"
        >
          <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
        </svg>
      </div>
    </Field>
  );
}

export function Textarea({
  id,
  label,
  optionalLabel,
  error,
  className,
  ...props
}: FieldProps & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">) {
  return (
    <Field id={id} label={label} optionalLabel={optionalLabel} error={error} className={className}>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, state(error), "resize-y")}
        {...props}
      />
    </Field>
  );
}
