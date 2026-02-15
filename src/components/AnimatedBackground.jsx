/**
 * Flowing bubbles background - all animations in CSS for smooth, reliable effect.
 * Bubbles rise and drift continuously.
 */
const BUBBLES = [
  { size: 140, left: '8%', top: '95%', delay: 0, duration: 22, name: 'float' },
  { size: 90, left: '22%', top: '100%', delay: 3, duration: 18, name: 'rise' },
  { size: 120, left: '45%', top: '98%', delay: 6, duration: 25, name: 'float' },
  { size: 70, left: '62%', top: '92%', delay: 2, duration: 20, name: 'drift' },
  { size: 160, left: '78%', top: '96%', delay: 4, duration: 28, name: 'rise' },
  { size: 85, left: '92%', top: '94%', delay: 1, duration: 19, name: 'float' },
  { size: 55, left: '15%', top: '88%', delay: 5, duration: 16, name: 'drift' },
  { size: 100, left: '38%', top: '90%', delay: 7, duration: 24, name: 'rise' },
  { size: 75, left: '55%', top: '85%', delay: 2.5, duration: 21, name: 'float' },
  { size: 130, left: '72%', top: '88%', delay: 4.5, duration: 26, name: 'drift' },
  { size: 65, left: '5%', top: '75%', delay: 1.5, duration: 17, name: 'rise' },
  { size: 95, left: '28%', top: '78%', delay: 8, duration: 23, name: 'float' },
  { size: 110, left: '50%', top: '82%', delay: 3.5, duration: 27, name: 'drift' },
  { size: 80, left: '68%', top: '76%', delay: 6.5, duration: 20, name: 'rise' },
  { size: 150, left: '85%', top: '80%', delay: 0.5, duration: 29, name: 'float' },
  { size: 60, left: '12%', top: '60%', delay: 4, duration: 15, name: 'drift' },
  { size: 105, left: '35%', top: '55%', delay: 9, duration: 24, name: 'rise' },
  { size: 72, left: '58%', top: '62%', delay: 2.2, duration: 18, name: 'float' },
  { size: 88, left: '80%', top: '58%', delay: 5.5, duration: 22, name: 'drift' },
  { size: 125, left: '3%', top: '40%', delay: 1.2, duration: 26, name: 'rise' },
  { size: 68, left: '42%', top: '38%', delay: 7.2, duration: 19, name: 'float' },
  { size: 98, left: '88%', top: '42%', delay: 3.8, duration: 23, name: 'drift' },
  { size: 78, left: '18%', top: '22%', delay: 6.8, duration: 21, name: 'rise' },
  { size: 115, left: '65%', top: '18%', delay: 0.8, duration: 25, name: 'float' },
  { size: 82, left: '48%', top: '8%', delay: 4.2, duration: 20, name: 'drift' },
];

function Bubble({ size, left, top, delay, duration, name }) {
  return (
    <div
      className={`bubble bubble-${name}`}
      style={{
        '--size': `${size}px`,
        '--left': left,
        '--top': top,
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
      }}
      aria-hidden
    />
  );
}

export default function AnimatedBackground() {
  return (
    <div className="animated-bg-root" aria-hidden>
      {/* Animated gradient base */}
      <div className="animated-bg-base" />
      <div className="animated-bg-mesh" />

      {/* Soft glowing orbs - CSS animated */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Aurora color shift */}
      <div className="aurora-layer aurora-bg" />

      {/* Flowing bubbles - pure CSS */}
      <div className="animated-bg-bubbles">
        {BUBBLES.map((b, i) => (
          <Bubble key={i} {...b} />
        ))}
      </div>

      {/* Subtle grain */}
      <div className="animated-bg-noise" />
    </div>
  );
}
