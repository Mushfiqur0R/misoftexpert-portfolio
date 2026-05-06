import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Portfolio } from "./components/Portfolio";
import { Gallery } from "./components/Gallery";
import { ClientReviews } from "./components/ClientReviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { DetailsModal } from "./components/DetailsModal";
import { DetailsModalData } from "./constants/data";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<DetailsModalData | null>(null);

  const openDetailsModal = (data: DetailsModalData) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About onFounderClick={openDetailsModal} />
        <Products />
        <Portfolio />
        <Gallery onGalleryClick={openDetailsModal} />
        <ClientReviews onReviewClick={openDetailsModal} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <DetailsModal selectedData={selectedData} isOpen={isModalOpen} onClose={closeDetailsModal} />
    </div>
  );
}

