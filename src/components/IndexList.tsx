export function IndexList({
  rows,
}: {
  rows: readonly { label: string; detail: string }[];
}) {
  return (
    <dl className="m-0 border-t border-line">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:py-5"
        >
          <dt className="text-mute">{row.label}</dt>
          <dd className="m-0">{row.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
