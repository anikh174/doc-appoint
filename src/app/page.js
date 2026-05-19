import Banner from "@/components/Banner";
import BrowseSpecialists from "@/components/BrowseSpecialists";
import ServiceInfo from "@/components/ServiceInfo";
import TopSpecialists from "@/components/TopSpecialists";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopSpecialists></TopSpecialists>
      <BrowseSpecialists></BrowseSpecialists>
      <ServiceInfo></ServiceInfo>
    </div>
  );
}
