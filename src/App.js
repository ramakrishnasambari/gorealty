import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import About from './components/About';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';
import StickyButtons from './components/StickyButtons';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Register Here And Avail The Best Offers!!");

  const openModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Pricing onOpenModal={openModal} />
      <FloorPlans onOpenModal={openModal} />
      <Amenities onOpenModal={openModal} />
      <Gallery onOpenModal={openModal} />
      <Location onOpenModal={openModal} />
      <About onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
        <ContactModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalTitle}
        />
        <StickyButtons onOpenModal={openModal} />
        <WhatsAppButton />
      </div>
    );
  }

  export default App;
