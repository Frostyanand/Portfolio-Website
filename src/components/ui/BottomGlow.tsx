export default function BottomGlow({ intensity = 0.12, width = "800px", height = "400px", blur = "30px" }: { intensity?: number, width?: string, height?: string, blur?: string }) {
  return (
    <div style={{
      position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
      width: width, height: height,
      background: `radial-gradient(50% 100% at 50% 100%, rgba(255,255,255,${intensity}) 0%, rgba(255,255,255,0) 100%)`,
      filter: `blur(${blur})`,
      pointerEvents: "none", zIndex: 0
    }} />
  );
}
