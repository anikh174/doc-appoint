import Banner from "@/components/Banner";
import BrowseSpecialists from "@/components/BrowseSpecialists";
import TopSpecialists from "@/components/TopSpecialists";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopSpecialists></TopSpecialists>
      <BrowseSpecialists></BrowseSpecialists>
    </div>
  );
}
