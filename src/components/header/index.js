import Link from 'next/link'

function Header() {
  return (
    <header class="text-black bg-yellow-400 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <span class="ml-3 text-xl">Imagine your horse</span>
          </a>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/breeds">
            <a class="mr-5 hover:text-white">Horse Breeds</a>
          </Link>
        </nav>
        <button class="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
          Surprise
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header