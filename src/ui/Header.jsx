import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
const Header = () => {
  return (
    <header className="py-5 md:py-11 px-[22px] md:px-[120px] items-center justify-between flex ">
      <div>
        <img src={logo} className="w-10 h-10" />
      </div>
      <nav className="flex items-center">
        <ul
          className="hidden md:flex gap-10 text-text-color font-normal pt-2
 text-lg font-montserrat leading-5 ml-20"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </nav>

      <button className="bg-button-color hidden md:block border-l-0 border-t-0 border-button-border-color text-white border-r-[2px] border-b-[2px] pt-[10px] pr-[20px] pb-[11px] pl-[20px] transition-all delay-75 gap-2 leading-5 rounded-[30px] font-montserrat font-medium text-base hover:shadow-[6px_6px_5px_0px_#a1a1a1] ">
        Donate
      </button>
      <div className="flex items-center md:hidden">
        <img src={menu} />
      </div>
    </header>
  );
};

export default Header;
