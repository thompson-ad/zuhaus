import Head from 'next/head'
import { groq } from 'next-sanity'
import { getClient } from '../utils/sanity'
import SliderItem from '../features/getContent/SliderItem'
import Container from '../components/Container'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'

export default function Home({ content }) {
  return (
    <div>
      <Head>
        <link rel="preload" href="/fonts/SpaceGrotesk-Regular.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/SpaceGrotesk-Medium.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/SpaceGrotesk-Bold.woff2" as="font" crossOrigin="" />
        <title>The Zuhaus Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
        <Container>
          <Hero />
        </Container>
      </header>
      <main>
        <h1>Recently Added</h1>
        <Container>{content && content.map((c) => <SliderItem key={c._id} {...c} />)}</Container>
      </main>
      <footer>
        <Container>hello</Container>
      </footer>
    </div>
  )
}

const blogQuery = groq`
  *[_type == "content"] | order(date desc) {
    _id, 
    "category" : category[0], 
    date,
    duration,
    "imageUrl": image.asset->url, 
    title, 
    "avatarUrl": specialist->image.asset->url,
    "excerpt": summary[0].children[0].text
  }[0...25]
`

export async function getStaticProps({ preview = false }) {
  const content = await getClient(preview).fetch(blogQuery)
  return {
    props: {
      content,
    },
  }
}
