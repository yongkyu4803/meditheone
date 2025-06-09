"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/cal001.jpg',
    title: '당신의 관절 건강을 위한 완벽한 선택',
    sub: '소연골콘드로이친, 보스웰리아, 식이섬유가 결합된 강력한 조합!',
    desc: '지금 바로 시작하세요.'
  },
  {
    image: '/images/cal002.jpg',
    title: '건강한 관절, 활기찬 삶',
    sub: '천연 성분으로 안전하게 관리하세요.',
    desc: '매일 꾸준한 관리가 중요합니다.'
  },
  {
    image: '/images/cal003.jpg',
    title: '최고의 품질과 효과',
    sub: '과학적으로 입증된 성분만을 사용합니다.',
    desc: '믿을 수 있는 선택, 메디테원과 함께.'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const length = slides.length;

  useEffect(() => {
    if (length === 0) return;
    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 2000); // Transition duration increased
  }, [currentIndex, length]);

  useEffect(() => {
    if (length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % length);
    }, 6000); // Interval increased
    return () => clearInterval(interval);
  }, [length]);

  if (length === 0) {
    return <div className="w-4/5 mx-auto h-[250px] bg-gray-800 rounded-xl"></div>;
  }

  const { image, title, sub, desc } = slides[currentIndex];

  return (
    <div className="relative w-4/5 mx-auto h-[600px] overflow-hidden bg-white rounded-2xl">
      <div className="relative w-full h-full flex items-center">
        <div className="relative w-full h-full overflow-hidden rounded-2xl"> {/* Added rounded-2xl here */}
          {isTransitioning ? (
            <>
              <div className="absolute w-full h-full transition-transform duration-[2000ms] ease-out" // Duration changed
                   style={{ transform: `translateX(${prevIndex > currentIndex ? '100%' : '-100%'})` }}>
                <Image
                  src={slides[prevIndex].image}
                  alt={slides[prevIndex].title}
                  fill
                  className="object-cover rounded-2xl" // Changed to rounded-2xl
                  priority
                />
              </div>
              <div className="absolute w-full h-full transition-transform duration-[2000ms] ease-out" // Duration changed
                   style={{ transform: `translateX(${prevIndex > currentIndex ? '-100%' : '100%'})` }}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover rounded-2xl" // Changed to rounded-2xl
                  priority
                />
              </div>
            </>
          ) : (
            <div className="w-full h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-2xl" // Changed to rounded-2xl
                priority
              />
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gray-500 bg-opacity-10 rounded-2xl"></div>
      <div className="absolute left-[10%] top-[50%] -translate-y-[50%] flex flex-col gap-6">
        <h1
          key={`title-${currentIndex}`}
          className="text-5xl font-bold text-orange-600 opacity-0 translate-y-[-20px] transition-all duration-1000 ease-out"
          style={{ transitionDelay: '100ms', opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? 'translateY(-20px)' : 'translateY(0)' }}
        >
          {title}
        </h1>
        <p
          key={`sub-${currentIndex}`}
          className="text-2xl text-orange-400 opacity-0 translate-y-[-20px] transition-all duration-1000 ease-out"
          style={{ transitionDelay: '300ms', opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? 'translateY(-20px)' : 'translateY(0)' }}
        >
          {sub}
        </p>
        <p
          key={`desc-${currentIndex}`}
          className="text-xl text-orange-400 opacity-0 translate-y-[-20px] transition-all duration-1000 ease-out"
          style={{ transitionDelay: '500ms', opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? 'translateY(-20px)' : 'translateY(0)' }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}