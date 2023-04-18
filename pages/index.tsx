import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Inicio">
      <h1>Soy home!</h1>
      <Link href="/confirm">Confirmar Asistencia</Link>
    </Layout>
  );
}
