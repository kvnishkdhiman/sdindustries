import ProductTemplate from "@/components/ProductTemplate";

export const metadata = {
  title: "TMT Bar Mill Setup & Consulting | SD Industries",
  description: "Explore SD Industries turnkey consultancy and equipment manufacturing for high yield TMT Bar Rolling Mills.",
};

export default function TMTBarMill() {
  return (
    <ProductTemplate
      title="TMT Bar Mill"
      subtitle="High speed, automated hot rolling setups for reinforcing steel bars."
      description="SD Industries provides complete turnkey engineering layout advisory and equipment fabrication for high-yield Thermomechanically Treated (TMT) Bar Mills. Our designs emphasize precision temperature control loops during the water quenching phase to achieve optimal yield strengths."
      features={[
        "Structural Layout for 8mm - 40mm TMT reinforcing bars.",
        "Automated continuous mill configuration with up to 18-20 stands.",
        "Equipped with advanced Thermex quenching and tempering systems.",
        "High-performance automated rake-type cooling bed integration."
      ]}
      applications={[
        "Infrastructure development and building concrete reinforcement bars.",
        "High seismic resistant steel grades production.",
        "High tensile wire rods and industrial structural framing."
      ]}
    />
  );
}
