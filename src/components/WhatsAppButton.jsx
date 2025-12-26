import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917032360083?text=I am interested in Wild Stay Resort Ananthagiri Hills"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 p-5 bg-[#25D366] text-white rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-500 group"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
