import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { DetailsModalData } from "../constants/data";

interface DetailsModalProps {
  selectedData: DetailsModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailsModal = ({ selectedData, isOpen, onClose }: DetailsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && selectedData && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-[32px] w-full max-w-4xl overflow-hidden shadow-2xl"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative">
              <img
                src={selectedData.image}
                alt={selectedData.title}
                className="w-full h-72 object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5 text-slate-900" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">{selectedData.title}</h2>
                <p className="text-brand-primary font-semibold text-lg">{selectedData.subtitle}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Details</h3>
                <p className="text-slate-600 leading-relaxed">{selectedData.details}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};