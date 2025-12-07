import { RouterProvider, useRouter } from './lib/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Membership } from './pages/Membership';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { useEffect } from 'react';

const PageContent = () => {
  const { currentPage } = useRouter();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'HerCircle Care - Trusted Support for Actresses & Creators',
      about: 'About Us - HerCircle Care',
      services: 'Our Services - HerCircle Care',
      membership: 'Membership Plans - HerCircle Care',
      testimonials: 'Testimonials - HerCircle Care',
      contact: 'Contact Us - HerCircle Care',
    };

    document.title = pageTitles[currentPage] || 'HerCircle Care';
  }, [currentPage]);

  const pages: Record<string, JSX.Element> = {
    home: <Home />,
    about: <About />,
    services: <Services />,
    membership: <Membership />,
    testimonials: <Testimonials />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{pages[currentPage] || <Home />}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <RouterProvider>
      <PageContent />
    </RouterProvider>
  );
}

export default App;
