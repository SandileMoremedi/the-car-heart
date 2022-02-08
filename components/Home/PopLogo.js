import { motion } from "framer-motion";
import Image from "next/image";
export default function PopLogo() {
  return (
    <motion.div
      className="popLogo"
      animate={{ left: "100vw" }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: 2,
      }}
    >
      <Image src="/logo.png" width={500} height={500} alt="Logo" />
    </motion.div>
  );
}
