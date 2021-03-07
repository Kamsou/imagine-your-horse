import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="text-white bg-red-700 text-2xl font-extrabold">
      <div className="justify-start flex flex-wrap p-5 items-center">
        <h1>Imagine your horse</h1>
      </div>
    </header>
  )
}

export default Header