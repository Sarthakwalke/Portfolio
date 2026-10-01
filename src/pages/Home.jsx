import { motion, useScroll, useTransform } from 'framer-motion'
import Shell from '../components/Shell.jsx'
const ease = [.22, 1, .36, 1]
const rv = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease } } }
const st = { hidden: {}, show: { transition: { staggerChildren: .1 } } }
const vp = { once: true, margin: '-80px' }
const focus = ['Predictive maintenance', 'CFD and aerodynamics', 'Robotics and automation', 'Intelligent manufacturing']
const ticker = ['Python', 'C', 'SQL', 'Scikit-learn', 'MATLAB', 'CAD', 'CFD', 'Git', 'GitHub', 'Jupyter', 'Google Colab', 'VS Code', 'Excel']
const skills = [['Languages', 'Python, C, SQL'], ['AI and ML', 'Machine learning fundamentals, data analysis, model building with Scikit-learn'], ['Engineering and design', 'CAD modeling and assembly, applied thermodynamics, fluid mechanics, IC engines'], ['Tools', 'Google Colab, Jupyter Notebook, Git, GitHub, VS Code, MATLAB, Excel']]
const projects = [
  ['AI-assisted airfoil design and aerodynamic optimization', 'Ongoing. CAD generates airfoil geometry, CFD simulates the flow, and MATLAB with machine learning models supports the optimization.', 'CAD, CFD, MATLAB, machine learning'],
  ['ML-based predictive maintenance of rotating machinery', 'Analyzed vibration and sensor data to identify operating conditions and likely faults. Handled preprocessing, feature extraction and exploratory analysis, then built and evaluated fault classification models.', 'Python, Scikit-learn'],
  ['Wheel rim analysis with A356-T6, Al 6061-T6 and Al 7075-T6', 'Research paper comparing the structural and thermal performance of an automotive wheel rim across three aluminum alloys, with the trade-offs for wheel design.', 'CAD, structural and thermal simulation'],
  ['Data-Shift, accounting automation for CA firms', 'Python tool that reads GST details, dates, party names, tax and amounts from PDF invoices and bank statements, and outputs Tally-import-compatible Excel sheets. Includes secure user login and an automated processing pipeline.', 'Python, PDF data extraction, Excel'],
  ['EEG-based smart helmet for highway hypnosis', 'Team project. An EEG sensor tracks rider focus, with gesture-based ignition, personal focus calibration and two safety levels: a buzzer and LED warning, then automatic ignition cutoff. Tested on an old scooter to show it works as a retrofit.', 'EEG sensing, embedded control'],
  ['Predicting engine fuel efficiency', 'Built and evaluated a model that predicts fuel efficiency from cylinders, horsepower, weight and acceleration.', 'Python, machine learning'],
  ['Full CAD assembly of a robot', 'Designed the individual parts and integrated them into a complete robot assembly.', 'CAD'],
]
function Letters({ text, delay = 0 }) {
  return text.split(' ').map((w, i) => (<span key={i} className="word">{[...w].map((c, j) => (
    <span key={j} className="mask"><motion.span style={{ display: 'inline-block' }} initial={{ y: '110%', rotate: 8 }} animate={{ y: 0, rotate: 0 }}
      transition={{ duration: .8, ease, delay: delay + (i * 6 + j) * .035 }}>{c}</motion.span></span>))}&nbsp;</span>))
}
function Sec({ id, title, children }) {
  return (<section id={id}><motion.h2 variants={st} initial="hidden" whileInView="show" viewport={vp}>
    <motion.span variants={rv} style={{ display: 'block' }}>{title}</motion.span>
    <motion.span className="bar" variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: .8, ease, delay: .2 } } }} /></motion.h2>{children}</section>)
}
const Cards = ({ children }) => <motion.div className="grid" variants={st} initial="hidden" whileInView="show" viewport={vp}>{children}</motion.div>
const Card = ({ children, className = '' }) => <motion.div className={'card ' + className} variants={rv} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>{children}</motion.div>
export default function Home() {
  const { scrollY } = useScroll()
  const py = useTransform(scrollY, [0, 700], [0, -50])
  const gy = useTransform(scrollY, [0, 700], [0, 90])
  return (<Shell><main className="wrap">
    <div className="panel">
      <motion.div className="blob b1" animate={{ x: [0, 80, -40, 0], y: [0, 50, 90, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="blob b2" animate={{ x: [0, -90, 30, 0], y: [0, -40, 40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="hero">
        <motion.div style={{ y: py }} initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.1 }} animate={{ clipPath: 'inset(0% 0 0 0)', scale: 1 }} transition={{ duration: 1.2, ease }}>
          <img src="/assets/sarthak.jpg" alt="Portrait of Sarthak Walke" width="900" height="1125" fetchPriority="high" /></motion.div>
        <motion.div style={{ y: gy }}>
          <motion.p className="hi" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, ease, delay: .3 }}>Hey, I am</motion.p>
          <h1 aria-label="Sarthak Walke"><Letters text="Sarthak Walke" delay={.45} /></h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease, delay: 1.3 }}>Mechanical engineering student in Pune, applying machine learning to fault detection in rotating machinery and to aerodynamic design.</motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease, delay: 1.5 }}>
            <a className="btn" href="#projects"><span>View projects</span></a><a className="btn ghost" href="/assets/Sarthak_Walke_Resume.pdf"><span>Download resume</span></a></motion.div>
        </motion.div></div>
      <motion.ul className="focus" variants={st} initial="hidden" animate="show" transition={{ delayChildren: 1.7 }}>
        {focus.map(f => <motion.li key={f} variants={rv}>{f}</motion.li>)}</motion.ul>
    </div>
    <div className="ticker" aria-hidden="true"><div className="track">{[...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}</div></div>
    <Sec id="about" title="About"><motion.div className="about" variants={st} initial="hidden" whileInView="show" viewport={vp}>
      <motion.p variants={rv}>I study mechanical engineering at AISSMS College of Engineering, with a grounding in thermodynamics, fluid mechanics and IC engines. Alongside coursework I build with Python and machine learning to solve mechanical and industrial problems.</motion.p>
      <motion.p variants={rv}>My main interests are predictive maintenance, robotics and automation, intelligent manufacturing and machine learning for fault detection.</motion.p>
      <motion.p variants={rv} className="mut">Open to an internship of 8 to 10 weeks, flexible on dates. I am in 3rd year, 5th semester.</motion.p></motion.div></Sec>
    <Sec id="skills" title="Skills"><Cards>{skills.map(([h, d]) => <Card key={h}><h3>{h}</h3><p className="mut">{d}</p></Card>)}</Cards></Sec>
    <Sec id="projects" title="Projects"><Cards>{projects.map(([h, d, t]) => <Card key={h} className="proj"><h3>{h}</h3><p>{d}</p><div className="tags">{t}</div></Card>)}</Cards></Sec>
    <Sec id="education" title="Education"><Cards><Card><h3>Bachelor of Engineering, Mechanical Engineering</h3><p className="mut">A.I.S.S.M.S. College of Engineering, Pune, 2024 to 2028<br />CGPA 8.3 (1st year), 8.0 (2nd year)</p></Card>
      <Card><h3>Leadership and certifications</h3><p className="mut">Media Head, Google Developer Groups, AISSMS COE chapter.<br />CAD Design Course (Udemy). MATLAB Onramp (MathWorks).</p></Card></Cards></Sec>
    <Sec id="contact" title="Contact"><motion.div variants={st} initial="hidden" whileInView="show" viewport={vp}>
      <motion.p variants={rv}>For internships and project work, reach me on LinkedIn or by phone.</motion.p>
      <motion.p variants={rv}><a className="btn" href="https://www.linkedin.com/in/S-walke-0a1617433" rel="noopener"><span>LinkedIn</span></a><a className="btn ghost" href="https://github.com/Sarthakwalke" rel="noopener"><span>GitHub</span></a><a className="btn ghost" href="tel:+917083200880"><span>+91 70832 00880</span></a></motion.p></motion.div></Sec>
  </main></Shell>)
}
