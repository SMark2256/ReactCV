import { motion, useAnimationControls  } from "framer-motion"
import { useEffect } from "react"

const PageMotion = ({ children }) => {
      const controls = useAnimationControls()

      useEffect(() => {
            controls.start({
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", duration: 1.2, bounce: 0.4 },
                })
      }, [])

      return (
      <motion.div
      initial={[{ opacity: 0}, {x: "-40vw"}]}
      animate={controls}
      >
            {children}
      </motion.div>
      )
}


export default PageMotion