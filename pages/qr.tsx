import HomeQr from '/public/images/home-qr.svg'
import Container from '@/components/layout/BlogContainer'

export default function Qr() {
  return (
    <div className="container mx-auto flex h-[80vh] max-w-md items-center justify-center">
      <img
        src="/images/home-qr.svg"
        className="aspect-square w-full"
        aria-hidden
        alt=""
      />
    </div>
  )
}
