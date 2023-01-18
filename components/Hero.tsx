export default function Hero() {
  return (
    <div className="relative aspect-[390/495] bg-mobile-hero bg-contain bg-no-repeat sm:aspect-[1300/495] sm:bg-desktop-hero">
      <h2 className="backdrop: absolute top-[48vw] left-[4vw] text-[5vw] sm:top-[calc(13.33vw+8px)] sm:left-[calc(2vw+8px)] sm:text-[min(2vw,36px)]">
        a blog by the dataviz team <br /> at Starschema
      </h2>
    </div>
  )
}
