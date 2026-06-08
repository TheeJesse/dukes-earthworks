interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export default function PlaceholderImage({ label, className = "", aspectRatio = "aspect-video" }: PlaceholderImageProps) {
  return (
    <div
      className={`${aspectRatio} ${className} flex items-center justify-center rounded-lg`}
      style={{ backgroundColor: "#F0EBE3" }}
    >
      <div className="text-center text-gray-500 px-4">
        <div className="text-4xl mb-2">📷</div>
        <div className="text-sm font-semibold uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );
}
