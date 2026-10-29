import { useSelector } from "react-redux";

const MenuItem = ({ icon: Icon, name }) => {
  const appNavIsOpen = useSelector((store) => store.appNav.isMenuOpen);
  return (
    <>
      {appNavIsOpen ? (
        <li className="flex items-center gap-3 pl-6 py-1.5 hover:bg-gray-200 rounded">
          <Icon className="h-6" />
          <span className="text-lg font-medium ">{name}</span>
        </li>
      ) : (
        <li className="flex flex-col items-center gap-1 p-2 hover:bg-gray-200 rounded">
          <Icon className="h-6" />
          <span className="text-xs">{name}</span>
        </li>
      )}
    </>
  );
};

export default MenuItem;
