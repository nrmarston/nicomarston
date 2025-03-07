import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export function FlickeringGridDemo() {
  return (
    <FlickeringGrid
      className="pointer-events-none absolute inset-0 z-0 size-full"
      squareSize={4}
      gridGap={8}
      color="#3b82f6"
      maxOpacity={0.3}
      flickerChance={0.1}
    />
  );
}
