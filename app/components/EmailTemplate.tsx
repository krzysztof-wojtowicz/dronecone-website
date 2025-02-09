interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  localization: string;
  service: string;
  message: string;
  email: string;
}

const styles: any = {
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  h1: {
    textAlign: "start",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "#EF9400",
  },
  p: {
    textAlign: "start",
    fontSize: "1rem",
  },
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  localization,
  service,
  message,
  email,
}) => (
  <main style={styles.main}>
    <h1 style={styles.h1}>Dziękujemy za wypełnienie formularza</h1>

    <p style={styles.p}>
      Zwrócimy się do Ciebie niedługo ze wszystkimi szczegółami i wyceną.
    </p>

    <div>
      <span>Twoje dane:</span>

      <div>
        <b>Imię i nazwisko:</b> {firstName} {lastName}
      </div>

      <div>
        <b>Lokalizacja usługi:</b> {localization}
      </div>

      <div>
        <b>Usługa:</b> {service}
      </div>

      <div>
        <b>Twoja wiadomość:</b> {message}
      </div>
    </div>

    <p style={{ color: "#575757" }}>
      <i>Mail wysłany automatycznie, prosimy na niego nie odpowiadać.</i>
    </p>
  </main>
);
