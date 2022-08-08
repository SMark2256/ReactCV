import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"

const NavBarMotion = ({ children }) => {
      const controls = useAnimationControls()

      useEffect(() => {
            controls.start({
                  opacity: 1 ,
                  transition: { duration: 0.3 }
            })
      }, [])

      return (
            <motion.div
            initial={[{ opacity: 0}]}
            animate={controls}
            >
                  {children}
            </motion.div>
      )

}

export default NavBarMotion