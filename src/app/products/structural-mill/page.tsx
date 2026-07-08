import ProductTemplate from "@/components/ProductTemplate";

export const metadata = {
  title: "Structural Rolling Mill Consulting | SD Industries",
  description: "Specialized rolling mill layouts and stands for producing H-beams, channels, angles, and customized structural steel profiles.",
};

export default function StructuralMill() {
  return (
    <ProductTemplate
      title="Structural Mill"
      subtitle="Heavy-duty rolling stand layouts for structural shapes (Channels, Angles, I-Beams)."
      description="We design and supply heavy section structural mills capable of rolling highly precise geometric profiles. Our consulting layouts focus on maintaining optimal structural cooling configurations to reduce thermal distortion and alignment issues."
      features={[
        "Capable of structural rolling angles, channels, beams, and flat bars.",
        "Equipped with custom universal stands for complex profile geometries.",
        "Includes advanced multi-roller inline straightening machinery setups.",
        "Integrated automated cut-to-length cold sawing machines."
      ]}
      applications={[
        "Heavy infrastructure development and construction framing.",
        "Transmission line towers and industrial steel sheds.",
        "Shipbuilding and heavy engineering structural assemblies."
      ]}
    />
  );
}
