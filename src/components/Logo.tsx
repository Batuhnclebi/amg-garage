export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="h-6 w-1.5 -skew-x-[14deg] bg-amg" />
      <span className="font-[family-name:var(--font-display)] text-xl font-extrabold uppercase leading-none tracking-tight">
        AMG<span className="ml-2 font-light tracking-[0.28em]">Garaj</span>
      </span>
    </span>
  );
}
