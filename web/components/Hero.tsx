import React from 'react'
import Heading from '../components/Heading'
import Text from '../components/Text'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Heading className={styles.hero__heading} as="h1" size="display">
        We connect you with specialists
      </Heading>
      <Text className={styles.hero__subheading}>
        Fuel your mind and body with knowledge from the worlds best in fitness, nutrition and mindfulness to better your
        future self.
      </Text>
    </div>
  )
}

export default Hero
