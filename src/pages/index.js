import Layout from '../Layout';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mr. Shah Rukh – CSS Mentor & Civil Services Guide</title>
        <meta
          name="description"
          content="Mr. Shah Rukh is a seasoned mentor helping aspirants prepare for Pakistan's CSS exams with strategy, insight, and personalized guidance."
        />
        <meta
          name="keywords"
          content="Mr. Shah Rukh, CSS mentor, CSS Pakistan, CSS preparation, FPSC exam, civil services Pakistan, CSS academy, CSS interview guidance, CSS written preparation"
        />
        <meta name="author" content="Mr. Shah Rukh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://csswithshahrukh.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center py-20 px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Your Trusted Guide to CSS Success – Mr. Shah Rukh
        </h1>

        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Preparing for the Central Superior Services (CSS) exam? Learn with one of Pakistan's most respected mentors. Mr. Shah Rukh offers deep insights, proven strategies, and unwavering support to help you secure a place in the civil services.
        </p>

        <a
          href="/Chatbot"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: '#4B5563' }}  // Tailwind emerald-600 hex code
          className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Ask Me Anything about CSS
        </a>
      </section>
    </Layout>
  );
}
