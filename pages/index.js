import Image from 'next/image'
import Layout from '../src/components/layout'

const defaultEndpoint = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  const results = data.civilizations
  console.log(results);
  return (
    <Layout className="relative">
      <div className="w-full h-5/6 absolute p-5">
        <Image src="/images/horse.png" alt="Emoji Poney" width="100px" height="100px"/>
        <div className="list-none font-bold text-lg">
          {
            results.map(result => {
              const { id, name } = result

              return (
                <li key={id}>
                  <h3>{ name }</h3>
                </li>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}
