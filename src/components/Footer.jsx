function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 pb-8 pt-6 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 h-px overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-1/3 animate-pulseSoft bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        </div>
        <p className="text-center text-sm text-slate-500">Built by Abhineet {"\u26A1"}</p>
      </div>
    </footer>
  );
}

export default Footer;
