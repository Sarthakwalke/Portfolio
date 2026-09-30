import { useEffect } from 'react'
import Shell from '../components/Shell.jsx'
export default function Legal({ title, items }) {
  useEffect(() => {
    document.title = title + ' | Sarthak Walke'
    const m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex,follow'; document.head.appendChild(m)
    window.scrollTo(0, 0)
    return () => { m.remove(); document.title = 'Sarthak Walke | Mechanical Engineering Student, AI/ML for Mechanical Systems' }
  }, [title])
  return (<Shell><main className="doc"><h1>{title}</h1><p className="mut">Last updated: 30 September 2026</p>
    {items.map(([h, p]) => (<div key={h}><h2>{h}</h2><p>{p}</p></div>))}</main></Shell>)
}
