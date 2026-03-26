/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <div id="início">
        <Hero />
      </div>
      <div id="serviços">
        <Services />
      </div>
      <About />
      <Manifesto />
      <div id="metodologia">
        <Workflow />
      </div>
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

