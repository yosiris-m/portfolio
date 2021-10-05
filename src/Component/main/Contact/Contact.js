import styles from "../Contact/Contact.module.scss";

function Contact() {
  return (
    <section className={styles.wrapper}>
      <p className={styles.msg}>
        Si cress que puedo aportar aportar valor a tu empresa....{" "}
        <strong>¡hablemos! </strong> 😉
      </p>
      <p>
        <a className={styles.btn} href="mailto:yosiris1086@gmail.com">
          <i class="far fa-envelope"></i> Escríbeme
        </a>
      </p>
    </section>
  );
}

export default Contact;
