import { motion } from "framer-motion";
import Image from "next/image";
export default function PopLogo() {
  return (
    <motion.div
      className="popLogo"
      initial={{ left: 0 }}
      animate={{ left: "100vw" }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: 2,
      }}
    >
      <Image src="/Logo.svg" width={500} height={500} alt="Logo" />
    </motion.div>
  );
}
