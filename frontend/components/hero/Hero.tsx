import { PortableText } from '@portabletext/react'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '../../pages'
import { Button, IButton } from '../buttons/Button'
import Particles from "react-particles";
import { loadFull, } from "tsparticles";
import { useCallback } from 'react'
import type { Container, Engine, IOptions } from "tsparticles-engine";

export interface IHero {
  img: SanityImageSource
  title: any
  body: any
  button?: IButton
  isHome?: boolean
}

export const Hero = ({ title, body, button, img, isHome }: IHero) => {
  const heroCustomBuilder = (imageUrlBuilder: any, options: any) => {
    return imageUrlBuilder
      .width(Math.min(options.originalImageDimensions.width, 1920))
      .quality(options.quality || 80);
  };

  const imageProps: any = useNextSanityImage(
    client,
    img,
    { imageBuilder: heroCustomBuilder }
  );

  return (
    <main>
      <div className="hero min-h-screen bg-cover relative max-h-screen" style={{ backgroundImage: imageProps?.src ? `url(${imageProps.src})` : undefined }}>
        <div className="w-full px-4 text-left z-10 max-w-[1280px]">
          <div className="w-full md:w-1/2">
            <div className='mb-4 w-full'>
              <PortableText value={title} components={HeroTitle} />
            </div>
            {body && <PortableText value={body} components={HeroBody} />}
            {button &&
              <div className='my-8'>
                <Button {...button} />
              </div>
            }
          </div>
        </div>
        {isHome &&
          <div className='absolute top-0 w-full h-full z-0'>
            <ParticlesHome />
          </div>
        }
      </div>
    </main>
  )
}

export const HeroTitle = {
  block: ({ children }: any) => <h1 className="text-3xl md:text-4xl lg:text-6xl text-white">{children}</h1>,
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>
  },
}

export const HeroBody = {
  block: ({ children }: any) => <p className="text-sm font-thin md:text-md lg:text-xl text-white leading-6">{children}</p>,
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    italic: ({ children }: any) => <em>{children}</em>,
  },
}


const ParticlesHome = () => {
  // const options: IOptions = {
  const options: any = {
    responsive: [{
      mode: 'screen'
    }],
    fullScreen: false,
    background: {
      color: {
        value: '#211C21'
      },
    },
    fpsLimit: 120,
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: true,
          mode: "connect",
        },
        onHover: {
          enable: true,
          mode: ["grab", "connect"],
          parallax: {
            enable: false,
            force: -5,
            smooth: 20
          }
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 8,
        },
        connect: {

        },
        repulse: {
          distance: 500,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#5149AB",
      },
      links: {
        color: "#313641",
        distance: 200,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 5 },
      },
    },
    detectRetina: true,
  };
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // await console.log(container);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} className='w-full h-full z-0' />
  );
}