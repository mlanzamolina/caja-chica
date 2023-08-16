import { Container, Link } from "@mui/material";
export const MoreInfo = MoreInfoDocsLink;

function MoreInfoItem({ children }) {
  return (
    <Container
      style={{ textAlign: "center", padding: "14px 0", marginTop: "auto" }}
    >
      {children}
    </Container>
  );
}

export function MoreInfoDocsLink() {
  const docsPath = "/docs/atlas/app-services/";
  const docsLink = new URL(docsPath, "https://mongodb.com");
  return (
    <MoreInfoItem>
      <span>
        {"CaJa Chica Area Ingenieria de Software, codigo fuente del frontend: "}
      </span>{" "}
      |{" "}
      <Link target="_blank" href="https://github.com/mlanzamolina/caja-chica">
        caja-chica
      </Link>
      <Link target="_blank" href={docsLink}>
        Docs
      </Link>
    </MoreInfoItem>
  );
}
