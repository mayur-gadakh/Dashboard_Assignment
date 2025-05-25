import { navigationLinks } from '../../data/navigationLinks';

const Sidebar= () => {
  return (
    <aside className="w-16 md:w-64 bg-blue-50 border-r border-gray-200 flex flex-col h-full">
      <h1 className="text-xl font-semibold text-blue-600 text-center mt-3">Healthcare</h1>
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-500 hidden md:block">General</h2>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-2">
          {navigationLinks.map((link) => (
            <li key={link.id} className="px-2 py-1">
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${
                  link.active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <link.icon
                  className={`h-5 w-5 ${link.active ? 'text-blue-600' : 'text-gray-500'}`}
                />
                <span className={`ml-3 hidden md:block ${link.active ? 'font-medium' : ''}`}>
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;