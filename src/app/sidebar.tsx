interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`text-sm pt-8 sidebar text-center fixed z-20 right-0 top-0 w-80 bg-gray-700 h-full shadow-md transform ease-in-out transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="font-bold lg mb-2 text-blue-600 pb-2">Menu</div>
      <ul className="list-none mb-4 text-xs">
        <li className="mb-4">
          <a
            href="https://opensea.io/collection/4762-og"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800"
          >
            OG - Letter of Marque
          </a>
        </li>
        <li className="mb-4">
          <a
            href="https://opensea.io/collection/4762-corsair-membership"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800"
          >
            Corsair Insignia
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="text-white hover:text-blue-800"
          >
            [Redacted]
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
