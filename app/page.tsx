import HomeCta from "@/components/sections/HomeCta";
import Hero from "@/components/sections/Hero";
import ImpactBanner from "@/components/sections/ImpactBanner";
import TrustStrip from "@/components/sections/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ImpactBanner />
      <HomeCta />
    </>
  );
}