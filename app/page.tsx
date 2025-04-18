import RatingCard from "./components/RatingCard";

export default function Home() {
  return (
    <div className="bg-white h-dvh flex py-10">
      <div className="">
        <RatingCard
          rating={4.6}
          vendorName="Shanghai Innovy Chemical New Materials"
          productName="Tesamorelin, CJC-1295, Ipamorelin"
          testCount={6}
          lastTestedDate={new Date()}
        />
      </div>
      
    </div>
  );
}
