import styles from './page.module.css'

export const metadata = {
  title: "Happy Birthday Kalpesh 🎉",
}

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Happy Birthday, Kalpesh! 🎂</h1>
        <p className={styles.subtitle}>
          Wishing you a day filled with joy, laughter, and great code.
        </p>

        <div className={styles.cake} aria-hidden>
          <div className={styles.candle} />
          <div className={styles.layers}>
            <div className={styles.layer} />
            <div className={styles.layer} />
            <div className={styles.layer} />
          </div>
        </div>

        <p className={styles.note}>
          From the team — may your commits be green and your CI fast. 🚀
        </p>
      </div>
    </main>
  )
}
