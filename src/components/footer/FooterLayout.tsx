import About from "./About";
import FeaturedSection from "./featuredSection/FeaturedSections";
import Social from "./Social";
import TopStores from "./TopStores/TopStores";

export default function FooterLayout() {
  return (
    <>
      <footer className="bg-[#000000] p-10 text-center lg:text-start">
        <div className="container grid grid-cols-12 gap-4">
          <div className="lg:col-span-3 md:col-span-6 col-span-12">
            <About />
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-12">
            <FeaturedSection />
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-12">
            <TopStores />
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-12">
            <Social/>
          </div>
        </div>
      </footer>
    </>
  );
}
