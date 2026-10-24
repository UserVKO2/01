import { motion } from 'motion/react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.page}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          React + Tailwind CSS + Motion
        </motion.div>

        <h1>Привет, мир!</h1>

        <p>
          Основа проекта настроена. Теперь можно создавать интерфейсы
          с плавными анимациями.
        </p>

        <motion.button
          type="button"
          className={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
        >
          Проверить анимацию
        </motion.button>
      </motion.section>
    </main>
  )
}
