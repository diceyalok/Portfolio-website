import { useContext, useMemo } from 'react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { ThemeContext } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { themePreference, resolvedTheme, cycleTheme } = useContext(ThemeContext);

  const display = useMemo(() => {
    if (themePreference === 'system') {
      return {
        icon: <FiMonitor size={18} />,
        label: `System · ${resolvedTheme === 'dark' ? 'Dark' : 'Light'}`,
      };
    }
    return themePreference === 'dark'
      ? { icon: <FiMoon size={18} />, label: 'Dark' }
      : { icon: <FiSun size={18} />, label: 'Light' };
  }, [themePreference, resolvedTheme]);

  return (
    <motion.button
      onClick={cycleTheme}
      className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition hover:border-primary/40 hover:text-primary"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      title="Cycle theme (system → light → dark)"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/60 text-primary">
        {display.icon}
      </span>
      <span>{display.label}</span>
    </motion.button>
  );
};

export default ThemeToggle;
