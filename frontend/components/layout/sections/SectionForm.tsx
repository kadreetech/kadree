import { Lang, useMainContext } from '../../../context/context'
import { WHATSAPP_URL } from '../../../lib/site'
import styles from '../../../styles/About.module.css'

// Contact sections now lead directly to WhatsApp instead of collecting form data.
export const SectionForm = (_props: { section: any; formsCollection: any[] }) => {
  const { lang } = useMainContext()
  const english = lang === Lang.EN
  return <section id="contact" className={styles.contact}>
    <div className={styles.container}>
      <p className={styles.eyebrow}>{english ? 'LET’S TALK' : 'HABLEMOS'}</p>
      <h2>{english ? 'Let’s turn your next project into reality.' : 'Hagamos realidad tu próximo proyecto.'}</h2>
      <p>{english ? 'Tell us what you need. Our team will help you find the right next step.' : 'Cuéntanos qué necesitas. Nuestro equipo te ayudará a encontrar el siguiente paso.'}</p>
      <a href={WHATSAPP_URL} className={styles.button}>{english ? 'Contact us on WhatsApp' : 'Consultar por WhatsApp'} <span aria-hidden="true">→</span></a>
    </div>
  </section>
}
