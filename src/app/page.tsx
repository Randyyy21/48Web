import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/sections/Hero';
import News from '@/components/sections/sections/News';
import Events from '@/components/sections/sections/Events';
import TheaterSchedule from '@/components/sections/sections/TheaterSchedule';
import Members from '@/components/sections/sections/Members';
import LiveStream from '@/components/sections/sections/LiveStream';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <News />
        <Events />
        <TheaterSchedule />
        <Members />
        <LiveStream />
      </main>
      <Footer />
    </div>
  );
}