function Button({ className = "" }) {
  return (
    <div className={`bg-border-gradient size-fit p-0.25 rounded-full flex items-center justify-center ${className}`}>
      <a className="text-sm md:text-xl bg-fancy-gradient py-3.5 md:py-4 px-4 md:px-8 rounded-full text-center">
        Claim Your Spot [Limited Early Access]
      </a>
    </div>
  );
}

export default Button;
