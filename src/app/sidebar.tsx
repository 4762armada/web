interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-20 right-0 top-0 w-80 bg-gray-700 h-full shadow-md transform ease-in-out transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
    </div>
  );
};

export default Sidebar;
