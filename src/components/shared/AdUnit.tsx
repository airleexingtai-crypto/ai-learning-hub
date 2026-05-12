export default function AdUnit({ slot }: { slot: string }) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  // Placeholder — replace with your AdSense publisher ID and ad unit IDs
  if (!adClient || adClient === "ca-pub-xxxxxxxxxxxxxxxx") {
    return (
      <div className="my-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface-alt)] p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-2">
          Advertisement
        </p>
        <div className="h-24 flex items-center justify-center bg-[var(--surface)] rounded-lg border border-[var(--border)]">
          <p className="text-sm text-[var(--text-tertiary)]">
            Ad slot: <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">{slot}</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-center overflow-hidden">
      <p className="text-[10px] text-[var(--text-tertiary)] mb-2 uppercase tracking-widest">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
