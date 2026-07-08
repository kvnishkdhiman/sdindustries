import ProductTemplate from "@/components/ProductTemplate";

export const metadata = {
  title: "Precision Mill Stands Manufacturer | SD Industries",
  description: "Standard and custom cartridge-type mill stands, housings, and rolls designed for heavy metallurgy environments.",
};

export default function MillStands() {
  return (
    <ProductTemplate
      title="Mill Stands"
      subtitle="Cartridge, housingless, and standard 3-High/2-High rolling mill stands."
      description="Our mill stands are built to withstand extreme mechanical dynamic loads. Engineered using high-grade structural casting, SD Industries mill stands maintain tight tolerances during the hot deformation process, ensuring consistent thickness and profile."
      features={[
        "Available in housingless, quick-change cartridge types.",
        "Heavy-duty cast steel construction with high structural stiffness.",
        "Equipped with custom precision roll gap adjustment systems.",
        "Fitted with robust high-capacity multi-row roller bearings."
      ]}
      applications={[
        "Hot rolling of structural shapes and long steel products.",
        "Roughing and finishing stands for TMT bar rolling lines.",
        "Custom specialized metal sizing and flattening plants."
      ]}
    />
  );
}
