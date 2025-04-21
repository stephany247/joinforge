function RadialGlow({ className = "" }) {
  return (
    // <div className="absolute top-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(108,229,125,0.2)_0%,_rgba(221,255,0,0)_100%)] w-full h-full rounded-lg"></div>
    <div
      className={`absolute bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(108,229,125,0.2)_0%,_rgba(221,255,0,0)_100%)] w-80 h-84 sm:w-90 sm:h-90 md:w-120 md:h-120 rounded-lg pointer-events-none ${className}`}
    ></div>
  );
}

export default RadialGlow;
