import ProductTemplate from "@/components/ProductTemplate";

export const metadata = {
  title: "Industrial Reheating Furnaces | SD Industries",
  description: "Walking beam and pusher type reheating furnaces custom designed for high energy efficiency and low fuel consumption.",
};

export default function ReheatingFurnace() {
  return (
    <ProductTemplate
      title="Reheating Furnace"
      titleHighlight="Reheating Furnace"
      subtitle="Energy-efficient walking beam and pusher type reheating systems."
      description="SD Industries reheating furnaces are calibrated to yield maximum thermal productivity. Our customized thermodynamic designs reduce fuel wastage, lower scaling losses, and optimize specific heat requirements per ton of steel processed."
      features={[
        "Energy efficient walking hearth or walking beam mechanics.",
        "Equipped with advanced combustion systems and recovery recuperators.",
        "Integrated PLC automation control loops for zone heat tuning.",
        "Low specific fuel consumption rates minimizing gas wastage."
      ]}
      applications={[
        "Hot rolling billet heating and soaking zones.",
        "High quality alloy steel heating and tempering.",
        "Pre-rolling processing of blooms, slabs, and raw billets."
      ]}
    />
  );
}
