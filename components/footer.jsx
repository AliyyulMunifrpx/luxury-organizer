export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white border-t border-neutral-200 py-6 h-[40dvh] px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* BRAND & LOCATION */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
          <span className="text-xl font-bold tracking-tight text-white">
            POTOHAZE
          </span>
          <p className="text-sm font-medium text-white">
            Yogyakarta | Magelang
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium text-white">
          <a
            href="https://wa.me/628155216555"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            +62 8155 216 555
          </a>
          <span className="hidden md:inline text-white">•</span>
          <a
            href="mailto:potohaze@gmail.com"
            className="hover:underline transition"
          >
            potohaze@gmail.com
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-xs text-white text-center md:text-right">
          © 2026 Potohaze. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
