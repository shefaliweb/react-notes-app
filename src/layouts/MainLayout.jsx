import AnimatedBackground from '../components/AnimatedBackground';

export default function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <AnimatedBackground />
      <div className="app-content">
        {children}
      </div>
    </div>
  );
}
