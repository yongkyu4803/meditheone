import HeroSection from '@/components/HeroSection/HeroSection';
import HeroProduct from '@/components/HeroSection/Product';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-28">
        <HeroSection />
      </div>
      <HeroProduct />
    </main>
  );
}
