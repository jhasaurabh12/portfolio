"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import Lottie from "lottie-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leetcodeAnimation, setLeetcodeAnimation] = useState(null);
  const [leetcodeDarkAnimation, setLeetcodeDarkAnimation] = useState(null);
  const [codeforcesAnimation, setCodeforcesAnimation] = useState(null);
  const [githubAnimation, setGithubAnimation] = useState(null);
  const [githubDarkAnimation, setGithubDarkAnimation] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [mounted, setMounted] = useState(false);
  const leetcodeRef = useRef(null);
  const codeforcesRef = useRef(null);
  const githubRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const loadAnimations = async () => {
      try {
        const [leetcode, leetcodeDark, codeforces, github, githubDark] = await Promise.all([
          fetch('/leetcode.json').then(res => res.json()),
          fetch('/leetcode-dark.json').then(res => res.json()),
          fetch('/codeforces.json').then(res => res.json()),
          fetch('/github.json').then(res => res.json()),
          fetch('/github-dark.json').then(res => res.json()),
        ]);

        setLeetcodeAnimation(leetcode);
        setLeetcodeDarkAnimation(leetcodeDark);
        setCodeforcesAnimation(codeforces);
        setGithubAnimation(github);
        setGithubDarkAnimation(githubDark);
      } catch (error) {
        console.error('Error loading animations:', error);
      }
    };

    loadAnimations();
  }, [mounted]);

  const handleMouseEnter = (icon, ref) => {
    if (!mounted) return;
    setHoveredIcon(icon);
    if (ref.current) {
      ref.current.setDirection(1);
      ref.current.goToAndPlay(0);
    }
  };

  const handleMouseLeave = () => {
    if (!mounted) return;
    setHoveredIcon(null);
  };

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  // Skip rendering animations until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gray-100/95 dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-gray-100/75">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-bold">Saurabh Jha</span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gray-100/95 dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-gray-100/75">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Saurabh Jha</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-100/95 dark:bg-background/95 border-b border-border/40 md:hidden">
            <nav className="container py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-4 transition-colors hover:text-foreground/80 ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        <div className="flex flex-1 items-center justify-end space-x-2">
          <button
            onClick={() => handleClick('https://leetcode.com/u/imsaurabhj/')}
            onMouseEnter={() => handleMouseEnter('leetcode', leetcodeRef)}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center justify-center w-[32px] h-[32px] rounded-md transition-colors mr-2"
            title="LeetCode Profile"
          >
            {hoveredIcon === 'leetcode' ? (
              <Lottie
                lottieRef={leetcodeRef}
                animationData={theme === 'dark' ? leetcodeDarkAnimation : leetcodeAnimation}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <>
                <Image
                  src="/leetcode.svg"
                  alt="LeetCode"
                  width={24}
                  height={24}
                  className="w-full h-full p-1 block dark:hidden"
                />
                <Image
                  src="/leetcode-dark.svg"
                  alt="LeetCode"
                  width={24}
                  height={24}
                  className="w-full h-full p-1 hidden dark:block"
                />
              </>
            )}
          </button>

          <button
            onClick={() => handleClick('https://codeforces.com/profile/imsaurabhj')}
            onMouseEnter={() => handleMouseEnter('codeforces', codeforcesRef)}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center justify-center w-[32px] h-[32px] rounded-md transition-colors mr-2"
            title="CodeForces Profile"
          >
            {hoveredIcon === 'codeforces' ? (
              <Lottie
                lottieRef={codeforcesRef}
                animationData={codeforcesAnimation}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <Image
                src="/codeforces.svg"
                alt="Codeforces"
                width={24}
                height={24}
                className="w-full h-full p-1"
              />
            )}
          </button>

          <button
            onClick={() => handleClick('https://github.com/jhasaurabh12')}
            onMouseEnter={() => handleMouseEnter('github', githubRef)}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center justify-center w-[32px] h-[32px] rounded-md transition-colors mr-2"
            title="GitHub Profile"
          >
            {hoveredIcon === 'github' ? (
              <Lottie
                lottieRef={githubRef}
                animationData={theme === 'dark' ? githubDarkAnimation : githubAnimation}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <>
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="w-full h-full p-1 block dark:hidden"
                />
                <Image
                  src="/github-dark.svg"
                  alt="GitHub"
                  width={48}
                  height={48}
                  className="w-full h-full p-1 hidden dark:block"
                />
              </>
            )}
          </button>

          <div className="w-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}