import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import CategoryLabel from '../../components/CategoryLabel'
import styles from './SliderItem.module.css'

interface SliderItemProps {
  image: string
  avatar: string
  title: string
  excerpt: string
  date: string
  duration: number
  category: 'fitness' | 'mindfulness' | 'nutrition'
  slug: string
}

const SliderItem = ({ image, avatar, title, excerpt, date, duration, category, slug }: SliderItemProps) => {
  return (
    <Link href={`/${slug}`}>
      <a>
        <div className={styles.SliderItem}>
          <Image
            className={styles.SliderItem__Image}
            alt="fitness"
            src={urlFor(image).url()}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className={styles.SliderItem__Info}>
            <Image
              className={styles.SliderItem__Author}
              src={urlFor(avatar).url()}
              alt="Picture of the author"
              width={60}
              height={60}
              objectFit="cover"
              objectPosition="center"
            />
            <Heading as="h3" size="medium" color="light">
              {title}
            </Heading>
            <Text className={styles.SliderItem__Excerpt} color="light">
              {excerpt}
            </Text>
            <div className={styles.SliderItem__Meta}>
              <Heading className={styles.SliderItem__Time} as="h6" size="xxsmall" color="light" weight="medium">
                {duration} mins
              </Heading>
              <div className={styles.SliderItem__MetaSeparator} />
              <Heading as="h6" size="xxsmall" color="light" weight="medium">
                {date}
              </Heading>
              <CategoryLabel className={styles.SliderItem__CategoryLabel} category={category}>
                {category}
              </CategoryLabel>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SliderItem
