"use client";

export default function GradientBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Blue blob — top left */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full animate-blob opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)",
        }}
      />

      {/* Violet blob — center right */}
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full animate-blob animation-delay-2000 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)",
        }}
      />

      {/* Cyan blob — bottom left */}
      <div
        className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full animate-blob animation-delay-4000 opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
