import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AnimatedCard(props) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
}
