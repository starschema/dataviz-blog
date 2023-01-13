export default function Excerpt(props) {
  return (
    <div className="mb-8 mt-10 text-xl leading-relaxed font-bold row-start-2 col-span-5">
      <p>{props.excerpt}</p>
    </div>
  )
}
