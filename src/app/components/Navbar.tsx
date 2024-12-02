import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Bodega Don Milagro"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Inicio", "Vinos", "Nosotros", "Ubicación", "Contacto"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
          {/* Menú móvil */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <span className="sr-only">Abrir menú principal</span>
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;