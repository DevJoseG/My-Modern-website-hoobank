import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Encuentre una mejor oferta <br className="sm:block hidden" /> de tarjeta en unos sencillos pasos.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>HooBank se adapta a tus necesidades, con nosotros puedes elegir entre multples tarjetas para tu beneficio.</p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )

export default CardDeal