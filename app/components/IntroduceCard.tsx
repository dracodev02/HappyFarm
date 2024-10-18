const IntroduceCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="flex flex-col flex-1 max-md:max-w-[500px] hover:-translate-y-4 transition-all">
      <div className="bg-white p-[2px] rounded-[6px]">
        <div className=" border-[4px] border-b-[14px] aspect-video w-full h-full border-green rounded">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
      </div>
      <div className="relative text-center max-md:text-[24px] text-[32px] backdrop-blur-[2px] pb-2">
        <p className=" leading-8 text-white">{title}</p>
        <p className=" h-full w-full -z-[1] py-2 leading-8 text-green-yellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {title}
        </p>
      </div>
    </div>
  );
};
export default IntroduceCard;
