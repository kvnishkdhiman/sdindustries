import ProductTemplate from "@/components/ProductTemplate";

export const metadata = {
  title: "Wire Rod Mill Design & Equipment | SD Industries",
  description: "High speed wire rod block mills, laying heads, and custom cooling conveyors designed by SD Industries.",
};

export default function WireRodMill() {
  return (
    <ProductTemplate
      title="Wire Rod Mill"
      titleHighlight="Wire Rod Mill"
      subtitle="High speed wire rod block mills with customized laying heads."
      description="SD Industries delivers high-speed wire rod mill consultancies designed to maximize plant productivity. We ensure layout speeds of up to 80-110 m/s remain stable through precision block engineering and custom air-cooled Stelmor conveyor lines."
      features={[
        "Continuous high-speed wire rod block integration.",
        "Precision laying heads with automated coil distribution rings.",
        "Custom air-cooling Stelmor conveyor zones for uniform grain structure.",
        "Automated wire coil compacting and binding stations."
      ]}
      applications={[
        "Manufacturing of industrial welding electrodes and binding wires.",
        "High tensile wire drawing and steel cord manufacturing.",
        "Automotive components, spring steel, and fastener production."
      ]}
    />
  );
}
