import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useEffect } from 'react'
import CONFIG from '../config'
import NavButtonGroup from './NavButtonGroup'

let wrapperTop = 0

const Hero = props => {
  const { siteInfo } = props
  const { locale } = useGlobal()
  const scrollToWrapper = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
    window.scrollTo({ top: wrapperTop - 2 * rem, behavior: 'smooth' })
  }

  useEffect(() => {
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  function updateHeaderHeight() {
    requestAnimationFrame(() => {
      const wrapperElement = document.getElementById('wrapper')
      wrapperTop = wrapperElement?.offsetTop
    })
  }

  const heroCover = siteInfo?.pageCover || '/images/hero-fallback.svg'

  return (
    <header
      id='header'
      style={{ zIndex: 1 }}
      className='w-full h-[78vh] min-h-[560px] max-h-[820px] relative overflow-hidden bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-300'>
      <div className='absolute inset-0 bg-gradient-to-b from-slate-900/5 via-slate-900/5 to-slate-950/35' />
      <div className='text-white absolute bottom-0 z-10 flex flex-col h-full items-center justify-center w-full'>
        <div className='font-bold tracking-wide text-4xl md:text-6xl shadow-text'>
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
        <div className='mt-4 px-4 text-center font-medium tracking-[0.18em] text-base md:text-xl shadow-text'>
          光机设计 · 可靠性工程 · 技术复盘
        </div>

        {siteConfig('HEXO_HOME_NAV_BUTTONS', null, CONFIG) && (
          <NavButtonGroup {...props} />
        )}

        <div
          onClick={scrollToWrapper}
          className='z-10 cursor-pointer w-full text-center py-3 text-2xl absolute bottom-5 text-white [text-shadow:0_0_0.1em_black,0_0_0.2em_black]'>
          <div className='opacity-70 animate-bounce text-xs'>
            {siteConfig('HEXO_SHOW_START_READING', null, CONFIG) &&
              locale.COMMON.START_READING}
          </div>
          <i className='opacity-70 animate-bounce fas fa-angle-down' />
        </div>
      </div>

      <LazyImage
        priority
        id='header-cover'
        alt={siteInfo?.title || siteConfig('TITLE')}
        src={heroCover}
        width={1920}
        height={1080}
        className={`header-cover w-full h-full object-cover object-center ${siteConfig('HEXO_HOME_NAV_BACKGROUND_IMG_FIXED', null, CONFIG) ? 'fixed' : ''}`}
      />
    </header>
  )
}

export default Hero
