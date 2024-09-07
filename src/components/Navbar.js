const Account = process.env.PUBLIC_URL + "/assets/Account.png";
const Search = process.env.PUBLIC_URL + "/assets/Search.png";
const Setting = process.env.PUBLIC_URL + "/assets/Setting.png";
const Arrow = process.env.PUBLIC_URL + "/assets/Arrow.png";

const Navbar = () => {
  return (
    <nav className="fixed top-1 left-10 w-full max-w-[90rem] rounded-lg border-b-2 mx-auto flex justify-between text-[14px] items-center px-4 py-3  bg-white z-50">
      {/* Left side - Links */}
      <div className="flex items-center space-x-8 font-semibold text-gray-600">
        <a href="#" className="hover:text-purple-600 border-b-2 border-purple-600">Home</a>
        <a href="#" className="hover:text-purple-600">Orders</a>
        <a href="#" className="hover:text-purple-600">Integrations</a>
        <a href="#" className="hover:text-purple-600 flex justify-center items-center">Tracking Page <span className='ml-2 mt-[2px]'><img src={Arrow} alt="Arrow"/></span></a>
        <a href="#" className="hover:text-purple-600">Partner with Us</a>
      </div>
      
      {/* Right side - Search and Icons */}
      <div className="flex items-center space-x-6">
        <div className="flex justify-center items-center border-b-2 border-gray-300 mr-12">
          <img src={Search} alt="Search"/>
          <input 
            type="text" 
            className="px-2 py-1 mr-3 w-36 focus:outline-none focus:border-purple-600" 
            placeholder="Search" 
          />
        </div>
        <a href="#" className="text-gray-600 hover:text-purple-600 font-medium flex gap-3 items-center"><span><img src={Account}/></span>Account</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 font-medium flex gap-3 items-center"><span><img src={Setting} alt="" srcset="" /></span>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
