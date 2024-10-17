import IntroduceCard from "./components/IntroduceCard";

export default function Home() {
  const items = [
    {
      img: "https://s3-alpha-sig.figma.com/img/c9fe/2c58/52df81c7c7c3a3f045710a7d602b1c36?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h7p~n12ei4bYuE2RTCdwPJt~S8Sd1qmb4o9NOoEozfslHI0E~MKUkAN6KVwBgJ3yQ2uGV2yudCE2hGZTYUlI70jGONn8hBEUX2x26ErkO--icPJoEZYNiixeHpkEYGWXSEVD9wXcozNMFbzMX~fzd-mPaqU0HYPHAPcQTOoiNA7v6MbMfgBRLY~UI~py3Zzero1t0o7Jzd7YdhfU~1cMr8WH-pCFv8Ay8rciiDDYASPr~IE8p2U4iI7LnlVwbsXdU1axn3zuZXDoJ4MbwclvixguYoHblYyndVjJE2LgmSsKlfNMSJO5Z3UgtQNnhwDKlqLmsDQxihWovvQL-5wNuA_",
      title: "Farming",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/d6e0/90b5/bbd6b1576194931c1f0ab153ffae5cca?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLzUIsNCxhZ0VbFIeCfipvU4Wedomm1hcxJ470lOu0BOl8ao2SqGCLge5VopGfYQeJK1lhrpfQvpHafK2de5Dtu7sINcZR85h~p02xKmzGTyANFkXjv8DxLwtB3D12NXVXS8t6jSFu8B4VndnCNUXRR-3NFNKBhMTNyt4oOsG-mnFuAAy4EnYjSI3Zp64yjgzOod-dI6RnHkijhch6~XRqUt3w0JCA~rku2jL97xf7Jn1csUS~CkYWc4vJnmOMIk-6WcXOYXqelYLNFnUx5eUGUbxIIj4zaFyDOdcVaAmyyfvDS2Wi0m02G95K9PAhZwUe-qdrUoEwjpIbJZOq7CBA__",
      title: "Staying connected",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/de0b/fff0/93f36f6b08baef8cfbd035871da718aa?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GChMu~hp944ja3w2q3ANc2mZ80W5L6Wywi76LtWKV5tcfzFNMNd2GbyH73gTmCvMowINwWZlAWhL9hWf97hIF-H5lFSKrFEvEI1LCOTTngwQCNoiSmzpImkZbzygbr77Qax-XygbWPkWs5YR3XVUaGY0pI31gc~wqC4NtwioVOVFNYyUtSgDfHQgKtwuAUgVlo6nu-s5JdhRUVdRHBTEuoupSMRla7WSMQ24uE2rmHZ0QqH6UcKCkmm6ONdZOff1s~ZJxEhqIbZEqrfLmVeRV6eQ~C4rpAnrJXkIe6c5Fj4F-JFxvq-WY7Jd~IZGtS8gTPTV4sMdLVU6sVL5Gj0eew__",
      title: "Trading",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col absolute top-0 -z-[2] left-0">
        {/* <img
          className="object-cover h-screen w-screen"
          src="/happyfarm.png"
          alt=""
        /> */}
        <video autoPlay muted loop className="object-cover h-screen w-screen">
          <source src="/LandingPage.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="items-center pb-2 backdrop-blur-[2px] text-center mt-[200px] max-lg:mt-[200px] flex flex-col gap-8 max-w-desktop w-full mx-auto px-2">
        {/* <img
          className="md:hidden w-1/2 max-w-[200px] object-cover"
          src="/logo.png"
          alt=""
        /> */}
        <video
          autoPlay
          muted
          loop
          className="md:hidden w-1/2 max-w-[200px] object-cover"
        >
          <source src="/LandingPage.mp4" type="video/mp4" />
        </video>
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
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
          <p className="inline-block px-5">
            <span className="px-2">
              Welcome to the best pixel casual game on starknet
            </span>
            <span className="px-2">chapter 1 is here</span>
          </p>
        </div>
      </div>
    </div>
  );
}
