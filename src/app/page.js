import Banner from "@/components/Banner";
import BrowseSpecialists from "@/components/BrowseSpecialists";
import ServiceInfo from "@/components/ServiceInfo";
import ServiceInfo2 from "@/components/ServiceInfo2";
import TopSpecialists from "@/components/TopSpecialists";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopSpecialists></TopSpecialists>
      <BrowseSpecialists></BrowseSpecialists>
      <ServiceInfo></ServiceInfo>
      <ServiceInfo2></ServiceInfo2>
    </div>
  );
}
