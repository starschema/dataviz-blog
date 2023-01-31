interface Props {
  name: string
  bio: string
}
export default function AuthorBio(props: Props) {
  const { name, bio } = props
  return (
    <div className="pb-6 text-black">
      <div className="text-xl font-medium">{name}</div>
      <div style={{ height: '2px' }} className="my-4 w-16 bg-blue-700"></div>
      <div>{bio}</div>
    </div>
  )
}
