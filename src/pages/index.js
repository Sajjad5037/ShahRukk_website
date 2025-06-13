import Layout from '../Layout';
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

      <section
        style={{
          textAlign: 'center',
          padding: '5rem 1.5rem',
          background: 'linear-gradient(to bottom, white, #f3f4f6)',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#1f2937',
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Your Trusted Guide to CSS Success – Mr. Shah Rukh
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            marginBottom: '1.5rem',
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          Preparing for the Central Superior Services (CSS) exam? Learn with one of Pakistan's most respected mentors. Mr. Shah Rukh offers deep insights, proven strategies, and unwavering support to help you secure a place in the civil services.
        </p>

        {/* Image gallery */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <img src="https://i.ibb.co/r2LJykQ1/1.png" alt="Slide 1" style={{ width: '90%', maxWidth: '600px' }} />
          <img src="https://i.ibb.co/qLR49BTn/2.jpg" alt="Slide 2" style={{ width: '90%', maxWidth: '600px' }} />
          <img src="https://i.ibb.co/bjvRwcL2/3.jpg" alt="Slide 3" style={{ width: '90%', maxWidth: '600px' }} />
          <img src="https://i.ibb.co/bjvRwcL2/3.jpg" alt="Slide 4" style={{ width: '90%', maxWidth: '600px' }} />
          <img src="https://i.ibb.co/TB95JVNw/5.jpg" alt="Slide 5" style={{ width: '90%', maxWidth: '600px' }} />
        </div>

        {/* CTA Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <a
            href="/Chatbot"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textAlign: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              userSelect: 'none',
              display: 'inline-block',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            Ask Me Anything about CSS
          </a>
        </div>
      </section>
    </Layout>
  );
}
