import logo from "@/public/logo.png";
const Header = () => {
  return (
    <div className="max-w-desktop w-full mx-auto mt-[52px] px-2 fly">
      <div className="bg-white p-[2px] rounded-[6px]">
        <div className="relative bg-light-green items-center text-base leading-5 uppercase border-[4px] border-b-[14px] border-green flex justify-between px-6 max-md:px-2 rounded">
          <div className="flex gap-6 text-white">
            <p>Twitter</p>
            <p>Help center</p>
          </div>
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:hidden"
            src={logo.src}
            alt=""
          />
          <div className="py-[18px]">
            <button className="bg-yellow rounded-sm text-green border-2 uppercase border-orange py-2 px-3">
              Play for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
