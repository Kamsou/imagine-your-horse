import Header from '../header';

function Layout({children}) {
  return (
    <div className="h-screen">
      <Header />
      {children}
      <link
        rel="preload"
        href="/fonts/AtkinsonHyperlegible/Atkinson-Hyperlegible-Regular.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/AtkinsonHyperlegible/Atkinson-Hyperlegible-Regular.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/AtkinsonHyperlegible/Atkinson-Hyperlegible-Bold.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/AtkinsonHyperlegible/Atkinson-Hyperlegible-Bold.woff2"
        as="font"
        crossOrigin=""
      />
    </div>
  )
}

export default Layout