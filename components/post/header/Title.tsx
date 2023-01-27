export default function PostTitle({ children }) {
  return (
    <h1
      className="mb-8 mt-10 text-4xl font-bold leading-tight md:mb-0"
      style={{ gridArea: 'title' }}
    >
      {children}
    </h1>
  )
}
