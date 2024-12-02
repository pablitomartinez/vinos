// Botón de WhatsApp Flotante

import Link from "next/link";

const whatsapp = {
  name: "whatsapp",
  icon: "/icons/whatsapp.svg",
  href: "https://wa.me/+543884123456",
};
const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/+543884123456"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-all z-50 animate-bounce"
    >
      {/* <WhatsApp size={32} /> */}
      <Link
        key={whatsapp.name}
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-75 transition"
      >
        <img src={whatsapp.icon} alt={whatsapp.name} className="h-6 w-6" />
      </Link>
    </a>
  );
};

export default WhatsAppButton;