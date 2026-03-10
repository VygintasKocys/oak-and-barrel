"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="theme-dark bg-oak-900 text-oak-300">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-16 pt-16 pb-8">
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div>
            <Link href="/" className="font-display text-[1.563rem] font-bold text-oak-100">
              Oak <span className="text-barrel-400">&amp;</span> Barrel
            </Link>
            <p className="mt-4 text-base leading-relaxed text-oak-400">
              A family-friendly New York restaurant specializing in steaks, fish,
              burgers, and fine wines since 2004.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[0.833rem] font-semibold uppercase tracking-[0.05em] text-barrel-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-oak-400 hover:text-oak-100 transition-colors leading-[2]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours & Address */}
          <div>
            <h4 className="text-[0.833rem] font-semibold uppercase tracking-[0.05em] text-barrel-400 mb-4">
              Hours &amp; Location
            </h4>
            <div className="space-y-2 text-base text-oak-400">
              <p>Monday &ndash; Friday: 11am &ndash; 11pm</p>
              <p>Saturday &ndash; Sunday: 10am &ndash; 12am</p>
              <p className="mt-4 text-oak-300">
                247 West 38th Street<br />
                New York, NY 10018
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-[0.833rem] font-semibold uppercase tracking-[0.05em] text-barrel-400 mb-4">
              Newsletter
            </h4>
            <p className="text-base text-oak-400 mb-4">
              Get updates on seasonal menus and events.
            </p>
            <form
              className="flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-11 rounded-l-full bg-oak-800 border border-oak-600 px-4 text-base text-oak-100 placeholder:text-oak-500 focus:border-barrel-400 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 w-11 rounded-r-full bg-barrel-400 flex items-center justify-center text-oak-950 hover:bg-barrel-500 transition-colors"
                aria-label="Subscribe"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-oak-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.833rem] text-oak-600">
            &copy; {new Date().getFullYear()} Oak &amp; Barrel. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons */}
            {["Instagram", "X", "Facebook"].map((name) => (
              <span
                key={name}
                className="text-[0.833rem] text-oak-500 hover:text-barrel-400 transition-colors cursor-pointer"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
