// components/hero/GridBackground.tsx
export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* purple glows — pixel offsets, anchored near the top of the page */}
      <div className="absolute top-[-100px] right-[10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-[500px] left-[5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
    </div>
  );
}