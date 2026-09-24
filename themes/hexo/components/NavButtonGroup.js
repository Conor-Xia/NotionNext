/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = () => {
  return (
    <nav id='home-nav-button' className='z-10 mt-8 flex flex-wrap items-center justify-center gap-4 px-5'>
      <a href='#wrapper' className='inline-flex h-12 min-w-[152px] items-center justify-center rounded-xl bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-700'>
        <i className='fas fa-book-open mr-2' aria-hidden />开始阅读
      </a>
      <a href='/category' className='inline-flex h-12 min-w-[152px] items-center justify-center rounded-xl border border-white/80 bg-white/15 px-6 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-900'>
        <i className='fas fa-th-large mr-2' aria-hidden />专题导航
      </a>
    </nav>
  )
}
export default NavButtonGroup
