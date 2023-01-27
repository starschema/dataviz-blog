export default function Excerpt(props) {
  return (
    <div
      className="mb-8 mt-10 flex items-end text-xl font-bold leading-relaxed"
      style={{ gridArea: 'excerpt' }}
    >
      <p>{props.excerpt}</p>
    </div>
  )
}
