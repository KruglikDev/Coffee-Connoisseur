import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const CoffeeStore = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Coffee Store: {router.query.id}</title>
      </Head>

      <h1>{router.query.id}</h1>

      <Link href="/" scroll={false}>
        Back to home
      </Link>
    </div>
  );
};

export default CoffeeStore;
