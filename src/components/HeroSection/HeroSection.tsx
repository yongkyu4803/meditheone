import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            당신의 관절 건강을 위한 완벽한 선택
          </h1>
          <p className="text-xl text-white mb-8">
            소연골콘드로이친, 보스웰리아, 식이섬유가 결합된 강력한 조합!
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700">
            자세히 알아보기
          </button>
        </div>
      </div>
    </div>
  );
} 