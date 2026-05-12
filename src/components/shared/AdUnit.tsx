export default function AdUnit({ slot }: { slot: string }) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  // Hidden — no ad client configured yet
  if (!adClient || adClient === "ca-pub-xxxxxxxxxxxxxxxx") {
    return null;
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
