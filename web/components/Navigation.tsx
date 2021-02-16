import React, { FC } from 'react'
import NextLink from 'next/link'
import { useAuth } from '../lib/auth'
import Container from './Container'
import Logo from '../components/Logo'
import styles from './Navigation.module.css'

const Navigation: FC<{ links?: { name: string; link: string }[] }> = ({ links }) => {
  const auth = useAuth()
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.navigation__container}>
          <Logo />
          <div className={styles.navigation__links}>
            {/* {links && links.length > 0
                ? links.map((link) => (
                    <Pane key={link.name}>
                      <NextLink href={link.link}>
                        <a>
                          <Text>{link.name}</Text>
                        </a>
                      </NextLink>
                    </Pane>
                  ))
                : null} */}
            <NextLink href={auth.user ? '/app' : '/signin'}>
              <a>
                <button>{auth.user ? 'Dashboard' : 'Sign up'}</button>
              </a>
            </NextLink>
          </div>
        </div>
      </Container>
    </nav>
  )
}

// Navigation.defaultProps = {
//   links: [
//     { name: 'Fitness', link: '/fitness' },
//     { name: 'Nutrition', link: '/nutrition' },
//     { name: 'Mindfulness', link: '/mindfulness' },
//     { name: 'Programmes', link: '/programmes' },
//     { name: 'Contact Us', link: '/contact-us' },
//   ],
// }

export default Navigation
