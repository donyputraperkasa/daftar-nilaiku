export function CreatorSignature({
  className = "",
}: {
  className?: string;
  onOpenLicense?: () => void;
}) {
  return (
    <p
      className={`text-xs font-normal tracking-wide text-[#9aa8bc] select-none text-center ${className}`}
    >
      <span>developer by : </span>
      <a
        href="https://portofolio-ku-gold.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="text-[#9aa8bc] transition-colors duration-200 hover:text-[#50637f] hover:underline"
      >
        dony putra perkasa
      </a>
    </p>
  );
}
