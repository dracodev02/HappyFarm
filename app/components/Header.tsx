import logo from "@/public/logo.png";
const Header = () => {
  return (
    <div className="w-full mt-8 px-2 fly fixed top-0 z-10 left-1/2 max-w-desktop">
      <div className="bg-white p-[2px] rounded-[6px]">
        <div className="relative bg-light-green items-center text-base leading-5 uppercase border-[4px] border-b-[14px] border-green flex justify-between px-6 max-md:px-2 rounded">
          <div className="flex gap-6 text-white">
            <p className="cursor-pointer hover:scale-110 transition-all">
              Twitter
            </p>
            <p className="cursor-pointer hover:scale-110 transition-all">
              Help center
            </p>
          </div>
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 max-md:hidden"
            src={logo.src}
            alt=""
          />
          <div className="py-[18px]">
            <button className="bg-yellow hover:scale-110 transition-all rounded-sm text-green border-2 uppercase border-orange py-2 px-3">
              Play for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
