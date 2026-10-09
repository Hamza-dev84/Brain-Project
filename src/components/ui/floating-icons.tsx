import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Wifi, 
  Cloud, 
  Server, 
  Phone, 
  MessageSquare, 
  Cpu, 
  Radio,
  Globe
} from 'lucide-react';

const ICONS = [
  { Icon: Wifi, delay: 0, x: 100, y: 50, depth: 0.3 },
  { Icon: Cloud, delay: 0.5, x: -80, y: 80, depth: 0.5 },
  { Icon: Server, delay: 1, x: 120, y: -60, depth: 0.7 },
  { Icon: Phone, delay: 1.5, x: -100, y: -40, depth: 0.4 },
  { Icon: MessageSquare, delay: 2, x: 90, y: 100, depth: 0.6 },
  { Icon: Cpu, delay: 2.5, x: -120, y: 60, depth: 0.5 },
  { Icon: Radio, delay: 3, x: 80, y: -80, depth: 0.3 },
  { Icon: Globe, delay: 3.5, x: -90, y: -100, depth: 0.4 },
];

export function FloatingIcons() {
  const { scrollY } = useScroll();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ICONS.map(({ Icon, delay, x, y, depth }, index) => {
        // Parallax effect: different scroll speeds based on depth
        const yParallax = useTransform(scrollY, [0, 1000], [0, -1000 * depth]);

        return (
          <motion.div
            key={index}
            className="absolute opacity-20 text-primary"
            initial={{ 
              x: x - 200, 
              y: y, 
              opacity: 1,
              rotate: -15 
            }}
            animate={{ 
              x: x, 
              y: y, 
              opacity: 0.3,
              rotate: 0 
            }}
            style={{
              y: yParallax,
              left: `${50 + (x / 10)}%`,
              top: `${50 + (y / 10)}%`,
            }}
            transition={{
              delay: delay + 1.5,
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 5
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
              }}
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}