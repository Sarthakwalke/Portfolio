import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
export default function Shell({ children }) {
  const [open, setOpen] = useState(false)
  const home = useLocation().pathname === '/'
  const h = id => (home ? '#' : '/#') + id
  const { scrollYProgress } = useScroll()
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const l = new Lenis({ anchors: true, lerp: 0.09 }); let id
    const raf = t => { l.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); l.destroy() }
  }, [])
  return (<MotionConfig reducedMotion="user">
    <motion.div className="progress" style={{ scaleX: w }} />
    <motion.header initial={{ y: -70 }} animate={{ y: 0 }} transition={{ duration: .7, ease: [.22, 1, .36, 1] }}>
      <div className="wrap"><Link className="logo" to="/"><img src="/favicon.svg" alt="" width="28" height="28" />Sarthak Walke</Link>
        <button className="menu" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(o => !o)}><span /><span /><span /></button>
        <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}><a href={h('about')}>About</a><a href={h('skills')}>Skills</a><a href={h('projects')}>Projects</a><a href={h('education')}>Education</a><a className="navcta" href={h('contact')}>Contact</a></nav></div>
    </motion.header>
    {children}
    <footer><div className="wrap"><span>&copy; 2026 Sarthak Walke</span><nav><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms and conditions</Link></nav></div></footer>
  </MotionConfig>)
}
