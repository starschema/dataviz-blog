export default function Hero() {
  return (
    <div className="flex h-[495px] flex-col justify-center bg-mobile-hero bg-no-repeat">
      <h2 className="text-3xl">
        a blog by the data visualization team at
        <span className="underline decoration-blue-700 decoration-4 underline-offset-4">
          {' '}
          Starschema{' '}
        </span>
      </h2>
    </div>
  )
}
