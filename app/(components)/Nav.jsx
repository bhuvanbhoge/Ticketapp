import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <div className="relative group">
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="bg-gray-700 text-white text-xs rounded px-2 py-1">
              Home
            </p>
          </div>
        </div>

        <div className="relative group">
          <Link href="/TicketPage/new">
            <FontAwesomeIcon icon={faTicket} className="icon" />
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="bg-gray-700 text-white text-xs rounded px-2 py-1">
              Form
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-green-500">HelpDesk App</h1>
        <p className="text-gray-500 text-sm">by Bhuvan Bhoge</p>
      </div>

      <div>
        <p className="text-default-text">bhuvan822002@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
