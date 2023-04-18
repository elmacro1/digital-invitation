import Head from "next/head";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Layout({
  children,
  title = "Digital invitation",
}: Props) {
  return (
    <>
      <Head>
        <title>{`Digital invitation - ${title}`}</title>
        <meta
          name="description"
          content="Digital invitation es una invitación digital."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>digital invitation</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
