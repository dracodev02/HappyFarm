import IntroduceCard from "./components/IntroduceCard";

export default function Home() {
  const items = [
    {
      img: "happy-farm-demo1.png",
      title: "Farming",
    },
    {
      img: "happy-farm-demo2.png",
      title: "Staying connected",
    },
    {
      img: "happy-farm-demo3.png",
      title: "Trading",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col absolute top-0 -z-[2] left-0">
        <img
          src="background.gif"
          alt=""
          className="object-cover h-screen w-screen"
        />
      </div>

      <div className="items-center pb-2 backdrop-blur-[2px] text-center mt-[200px] max-lg:mt-[200px] flex flex-col gap-8 max-w-desktop w-full mx-auto px-2">
        <img
          className="md:hidden w-1/2 max-w-[200px] object-cover"
          src="/logo.png"
          alt=""
        />
        <div className="relative max-md:text-[50px] text-[72px] leading-[72px] max-md:leading-[50px]">
          <h1 className="uppercase inline-grid text-white">
            <span>experience an interesting</span>
            <span>{`way to explore the farmer's life`}</span>
          </h1>
          <h1 className="absolute select-none top-1/2 left-1/2 max-md:py-1.5 -translate-x-1/2 -translate-y-1/2 w-full h-full py-2 -z-[1] uppercase inline-grid text-black">
            <span>experience an interesting</span>
            <span>{`way to explore the farmer's life`}</span>
          </h1>
        </div>
        <div className="relative">
          <p className="text-[24px] leading-7 text-white">
            Make your home in a world of unlimited adventure.
            <br />
            Master skills and play with friends. Build new communities
          </p>
          <p className="text-[24px] select-none leading-7 py-1.5 max-md:py-1 -z-[1] text-black absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
            Make your home in a world of unlimited adventure.
            <br />
            Master skills and play with friends. Build new communities
          </p>
        </div>
      </div>
      <div className="px-2 pb-10 flex mt-[130px] max-lg:mt-[140px] gap-4 max-w-desktop w-full mx-auto max-md:flex-col max-md:items-center">
        {items.map((item, index) => {
          return (
            <IntroduceCard key={index} img={item.img} title={item.title} />
          );
        })}
      </div>
      <div className="bg-yellow fixed bottom-0 w-full mt-8 overflow-hidden whitespace-nowrap slider-container">
        <div className="slider">
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">Welcome to the best pixel casual game</span>
            <span className="px-2">chapter 1 is here</span>
          </p>
        </div>
      </div>
    </div>
  );
}
