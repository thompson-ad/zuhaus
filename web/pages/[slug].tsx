import * as React from 'react'
import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getClient, PortableText, urlFor } from '../lib/sanity'
import { groq } from 'next-sanity'
import Heading from '../components/Heading'
import Text from '../components/Text'
import Container from '../components/Container'
import Navigation from '../components/Navigation'

const Post = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  // TODO: understand the usePreview subscription hook
  const { title, content, specialist } = post

  return (
    <>
      <header>
        <Navigation />
      </header>
      <Container>
        <article>
          <Heading as="h1" size="display">
            {title}
          </Heading>
          <div>
            <Image
              src={urlFor(specialist.image).url()}
              alt="Picture of the specialist"
              width={60}
              height={60}
              objectFit="cover"
              objectPosition="center"
            />
            <Text>{`By ${specialist.firstName} ${specialist.secondName}, ${specialist.title}`}</Text>
            <button>{`${specialist.firstName}'s programmes`}</button>
          </div>
          <div className="">
            <Text>
              <PortableText blocks={content} />
            </Text>
          </div>
        </article>
      </Container>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = await getClient(false).fetch(groq`*[_type == "content" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

const postQuery = groq`
  *[_type == "content" && slug.current == $slug][0] {
    _id,
    title,
    "content": mainContent,
    "specialist": specialist->{image, firstName, secondName, title, bio, quote, url},
    "slug": slug.current
  }
`

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  console.log('POST', post)

  return {
    props: {
      post,
    },
  }
}
