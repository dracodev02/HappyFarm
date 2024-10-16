import Header from "./components/Header";
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
      <div className="flex flex-col  absolute top-0 -z-[2] left-0">
        <img
          className=" object-cover min-h-[95%]"
          src="https://s3-alpha-sig.figma.com/img/0237/3fe8/1617548fbda4a1c69313c5d393597fd0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NGQcionvACpq2irSOXR3kkn2YxDvuJfjs2SLqYnZNHAi51Ji3S601mPHnSXQRiiBzhGILxOzFZG25nXew~kqfZOF0vIHAWbh8DZHOrnvhIM8w4JsVQe~pkhOKA-VhpVsOCoVqStP7eYa4c8aJLMUlEMUjyDW1A3OZZn-PoqcLarmQEP6JxJe3hh4K00eBl9oQxuN29V6OehmSC-CjzwX5AT7geqfPLLDSdkz4f6O2smc~1osNn~gg6nOTrFs2W-FKkKJjazuPnmtdjAKl3P3HgrhsgH54TgdhX2-ytmg~48GVKiMQUdzU2NczZdsLZBpvciXashb4ypYlzW8JWtjQg__"
          alt=""
        />
        <div className="border-t-[8px] border-brown bg-light-brown w-full h-[192px] "></div>
        <div className="bg-yellow h-[50px] w-full">
          <div className="flex justify-between py-2 px-2 whitespace-nowrap mx-auto w-full max-w-desktop uppercase text-green-yellow text-base left-5">
            <div className="flex gap-6 py-2">
              <p>Welcome to the best pixel casual game on starknet</p>
              <p>chapter 1 is here</p>
            </div>
            <div className="flex gap-6 py-2">
              <p>Welcome to the best pixel casual game on starknet</p>
              <p>chapter 1 is here</p>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <div className=" text-center mt-[143px] flex flex-col gap-8 max-w-desktop w-full mx-auto px-2">
        <div className="relative">
          <h1 className="uppercase inline-grid text-white text-[72px] leading-[72px]">
            <span>experience an interesting</span>
            <span>{` way to explore the farmer's life`}</span>
          </h1>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full py-2 -z-[1] uppercase inline-grid text-black text-[72px] leading-[72px]">
            <span>experience an interesting</span>
            <span>{` way to explore the farmer's life`}</span>
          </h1>
        </div>
        <div className="relative">
          <p className="text-[24px] leading-7 text-white">
            Make your home in a world of unlimited adventure.
            <br />
            Master skills and play with friends. Build new communities
          </p>
          <p className="text-[24px] leading-7 py-1.5 -z-[1] text-black absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
            Make your home in a world of unlimited adventure.
            <br />
            Master skills and play with friends. Build new communities
          </p>
        </div>
      </div>
      <div className="flex mt-[181px] gap-4 max-w-desktop w-full mx-auto">
        {items.map((item, index) => {
          return (
            <IntroduceCard key={index} img={item.img} title={item.title} />
          );
        })}
      </div>
    </div>
  );
}
