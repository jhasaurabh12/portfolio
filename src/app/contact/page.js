"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function ContactPage() {
  const [linkedinAnimation, setLinkedinAnimation] = useState(null);
  const [twitterAnimation, setTwitterAnimation] = useState(null);
  const [gmailAnimation, setGmailAnimation] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const linkedinRef = useRef(null);
  const twitterRef = useRef(null);
  const gmailRef = useRef(null);
  
  useEffect(() => {
    setIsMounted(true);
    // Only fetch animations on the client side
    if (typeof window !== 'undefined') {
      // Fetch all JSON files when component mounts
      fetch('/linkedin.json')
        .then(response => response.json())
        .then(data => setLinkedinAnimation(data))
        .catch(error => console.error('Error loading LinkedIn animation:', error));

      fetch('/twitter.json')
        .then(response => response.json())
        .then(data => setTwitterAnimation(data))
        .catch(error => console.error('Error loading Twitter animation:', error));

      fetch('/gmail.json')
        .then(response => response.json())
        .then(data => setGmailAnimation(data))
        .catch(error => console.error('Error loading Gmail animation:', error));
    }
  }, []);

  const handleMouseEnter = (icon, ref) => {
    setHoveredIcon(icon);
    if (ref.current) {
      ref.current.setDirection(1);
      ref.current.goToAndPlay(0);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  // Don't render anything until client-side hydration is complete
  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Contact</h1>
        
        <div className="flex justify-start">
          <Card className="w-full md:w-[600px]">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always interested in hearing about new opportunities, collaborations,
                or just having a friendly chat about technology and development.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleClick('https://www.linkedin.com/in/imsaurabhj/')}
                        onMouseEnter={() => handleMouseEnter('linkedin', linkedinRef)}
                        onMouseLeave={handleMouseLeave}
                        className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-md transition-colors duration-200"
                      >
                        {hoveredIcon === 'linkedin' && linkedinAnimation ? (
                          <Lottie
                            lottieRef={linkedinRef}
                            animationData={linkedinAnimation}
                            loop={false}
                            autoplay={true}
                            style={{ width: '100%', height: '100%' }}
                          />
                        ) : (
                          <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={32}
                            height={32}
                            className="w-full h-full p-2"
                          />
                        )}
                      </button>
                      <button
                        onClick={() => handleClick('https://x.com/saurabhhjha')}
                        onMouseEnter={() => handleMouseEnter('twitter', twitterRef)}
                        onMouseLeave={handleMouseLeave}
                        className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-md transition-colors duration-200"
                      >
                        {hoveredIcon === 'twitter' && twitterAnimation ? (
                          <Lottie
                            lottieRef={twitterRef}
                            animationData={twitterAnimation}
                            loop={false}
                            autoplay={true}
                            style={{ width: '100%', height: '100%' }}
                          />
                        ) : (
                          <Image
                            src="/twitter.svg"
                            alt="Twitter"
                            width={32}
                            height={32}
                            className="w-full h-full p-2"
                          />
                        )}
                      </button>
                      <button
                        onClick={() => handleClick('mailto:jhasaurabh12@gmail.com')}
                        onMouseEnter={() => handleMouseEnter('gmail', gmailRef)}
                        onMouseLeave={handleMouseLeave}
                        className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-md transition-colors duration-200"
                      >
                        {hoveredIcon === 'gmail' && gmailAnimation ? (
                          <Lottie
                            lottieRef={gmailRef}
                            animationData={gmailAnimation}
                            loop={false}
                            autoplay={true}
                            style={{ width: '100%', height: '100%' }}
                          />
                        ) : (
                          <Image
                            src="/gmail.svg"
                            alt="Gmail"
                            width={48}
                            height={48}
                            className="w-full h-full p-2"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}