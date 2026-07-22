import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainContextWrapper } from '../context/context'
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor-ts')
  .then((mod) => mod.AnimatedCursor), {
  ssr: false
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <MainContextWrapper>
      <AnimatedCursor
        color='#5149AB'
        trailingSpeed={5}
      />
      <Component {...pageProps} />
    </MainContextWrapper>
  )
}

export default MyApp
