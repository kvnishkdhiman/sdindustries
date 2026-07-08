import Image from "next/image";

export const metadata = {
  title: "Media Gallery | SD Industries",
  description: "Browse high resolution photos of SD Industries rolling mills, furnace test beds, and custom machinery.",
};

export default function Gallery() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Media</strong> Gallery
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            High resolution photographic archives of our commissioned plants, stands, and fabrication workshops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { src: "/assets/hero_bg.jpg", caption: "Commissioned continuous hot rolling mill line" },
            { src: "/assets/who_we_are.jpg", caption: "Consultancy associates reviewing mill layout drawings" },
            { src: "/assets/product_sketch.jpg", caption: "Precision engineered housing stand blueprint model" }
          ].map((item, idx) => (
            <div key={idx} className="border border-[#E0E0E0] rounded-[4px] bg-[#F5F6F7] overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 border-t border-[#E0E0E0] bg-white">
                <p className="text-sm font-semibold text-[#0B2A4A] font-body">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
