import ProductTemplate from "@/components/ProductTemplate";

export const metadata = {
  title: "Rolling Mill Gearboxes & Drives | SD Industries",
  description: "High torque speed reducers, pinions, and mill drives engineered for steel forming equipment.",
};

export default function RollingMillGearbox() {
  return (
    <ProductTemplate
      title="Rolling Mill Gearbox"
      titleHighlight="Rolling Mill Gearbox"
      subtitle="High torque reduction gearboxes, combination gearboxes, and pinions."
      description="SD Industries engineering division fabricates custom, heavy-duty speed reducers capable of handling the severe reverse loading cycles common in rolling mills. All gear teeth profiles are ground and case hardened to ensure vibration-free transmission."
      features={[
        "Fitted with case hardened, ground helical gears for low noise.",
        "Integrated dual-lubrication spray lines for high speed continuous operation.",
        "Sturdy cast steel housing dampening dynamic torsion stress.",
        "Available in combination reducer-cum-pinion stand profiles."
      ]}
      applications={[
        "Roughing and intermediate stand power transmission.",
        "Main drive gear setups for high-yield steel mills.",
        "Coiler and shearing machine heavy mechanical drives."
      ]}
    />
  );
}
