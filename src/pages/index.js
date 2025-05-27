import Layout from '../Layout';
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mr. Shah Rukh – CSS Expert & Frontend Design Mentor</title>
        <meta name="description" content="Welcome to the official page of Mr. Shah Rukh – an expert CSS teacher passionate about modern web styling, responsive layouts, and elegant UI design." />
        <meta name="keywords" content="CSS teacher, Mr. Shah Rukh, frontend design, web styling, flexbox, grid, responsive design, CSS animations, frontend mentor" />
        <meta name="author" content="Mr. Shah Rukh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://csswithshahrukh.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center py-20 px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Master the Art of CSS with Mr. Shah Rukh</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Learn CSS the right way — from responsive layouts and modern styling to animations and UI polish. Whether you're a beginner or brushing up your skills, Mr. Shah Rukh's expert guidance will elevate your frontend game.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/portfolio">
            <span className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer">
              See Portfolio
            </span>
          </Link>
          <Link href="/contact">
            <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer">
              Contact Me
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
