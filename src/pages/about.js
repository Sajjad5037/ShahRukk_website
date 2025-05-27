import Layout from '../Layout';
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Sajjad Ali Noor | Python Developer & AI Enthusiast</title> 
        <meta
          name="description"
          content="Meet Sajjad Ali Noor, a skilled Python Developer and AI Enthusiast specializing in chatbot development, automation, and data-driven AI solutions."
        />
        <meta
          name="keywords"
          content="Python developer, AI enthusiast, chatbot development, automation, machine learning, data analysis, web scraping, NLP"
        />
        <meta name="author" content="Sajjad Ali Noor" />
        <meta property="og:title" content="About Sajjad Ali Noor | Python Developer & AI Enthusiast" />
        <meta property="og:description" content="Learn about Sajjad Ali Noor, a skilled Python Developer and AI Enthusiast who specializes in creating intelligent systems." />
      </Head>

      <div
        style={{
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          padding: "4rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div className="container">
          <h1>About Me</h1>
          <p>
            <strong>Hi, I'm Sajjad Ali Noor!</strong> I'm a Python Developer with a deep passion for AI and automation. I specialize in building practical solutions that simplify complex tasks, enhance workflows, and bring meaningful insights from data. My expertise lies in creating chatbots, automating repetitive processes, and leveraging AI for problem-solving. With a strong foundation in both development and data-driven technologies, I focus on making systems smarter and more efficient, empowering businesses to thrive.
          </p>

          <h2>Proficient in Python</h2>
          <p>
            I have deep expertise in Python and can accomplish a wide range of tasks that directly
            benefit businesses:
          </p>

          <h3>AI-Powered Chatbots</h3>
          <p>
            I build custom chatbots using the OpenAI API, trained on your business data (PDFs,
            customer FAQs, databases) to provide instant, accurate, and personalized responses.
            This improves customer engagement, reduces support costs, and ensures 24/7 availability.
          </p>

          <h3>Automation & Scripting</h3>
          <p>
            I write Python scripts that automate repetitive tasks, helping businesses save time,
            reduce costs, and increase productivity. Whether it’s automating reports, managing emails,
            or processing bulk data, my solutions allow businesses to focus on what truly matters.
          </p>

          <h3>Web Scraping & Data Extraction</h3>
          <p>
            I help businesses gather insights on market trends, competitors, and customer behavior
            by scraping and analyzing web data. These insights enable businesses to make
            data-driven decisions and stay ahead in their industry.
          </p>

          <h3>Data Processing, Analysis & AI-Driven Insights</h3>
          <p>
            Businesses today thrive on data. I specialize in working with pandas, NumPy, and
            machine learning models to analyze business data and uncover hidden patterns,
            customer behaviors, and sales trends. This allows businesses to:
          </p>
          <ul>
            <li>✅ Optimize marketing strategies based on real-time data</li>
            <li>✅ Identify potential growth areas and reduce operational risks</li>
            <li>✅ Predict customer needs and offer personalized services</li>
          </ul>

          <h3>Machine Learning & Natural Language Processing (NLP)</h3>
          <p>
            By developing AI systems that understand and process human language, I help businesses
            automate sentiment analysis, customer feedback processing, and predictive analytics.
            This enhances customer experience and enables businesses to stay ahead with intelligent
            decision-making.
          </p>

          <h2>Why Work With Me?</h2>
          <p>
            I believe in leveraging AI and automation to transform businesses. Whether you need
            a smart chatbot, workflow automation, or AI-driven insights, I can help you:
          </p>
          <ul>
            <li>✔ Reduce operational costs</li>
            <li>✔ Improve efficiency and customer engagement</li>
            <li>✔ Make smarter, data-driven business decisions</li>
          </ul>

          <h3>Let’s work together!</h3>
          <p>
            I’m open to collaborations and freelance projects. Let’s connect and explore
            how AI can boost your business!
          </p>

          <style jsx>{`
            .container {
              max-width: 720px;
              background: #f9fafb;
              padding: 2.5rem 3rem;
              border-radius: 12px;
              box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #222;
              line-height: 1.7;
            }

            h1 {
              font-size: 2.75rem;
              margin-bottom: 1.2rem;
              color: #1a73e8; /* bright blue accent */
              font-weight: 700;
              letter-spacing: -0.02em;
            }

            h2 {
              font-size: 1.9rem;
              margin-top: 2.8rem;
              margin-bottom: 1rem;
              color: #0f4c81;
              font-weight: 600;
              border-bottom: 3px solid #1a73e8;
              padding-bottom: 0.4rem;
            }

            h3 {
              font-size: 1.4rem;
              margin-top: 2rem;
              margin-bottom: 0.8rem;
              color: #3367d6;
              font-weight: 600;
            }

            p {
              font-size: 1.125rem;
              margin-bottom: 1.2rem;
              text-align: left;
            }

            ul {
              margin-left: 1.2rem;
              margin-bottom: 1.4rem;
              list-style-type: none;
              padding-left: 0;
            }

            ul li {
              position: relative;
              padding-left: 2rem;
              font-size: 1.1rem;
              margin-bottom: 0.6rem;
              color: #333;
            }

            ul li::before {
              content: '✔';
              position: absolute;
              left: 0;
              color: #1a73e8;
              font-weight: bold;
            }

            ul li:first-child::before {
              content: '✅';
            }

            strong {
              color: #1a73e8;
            }

            @media (max-width: 768px) {
              .container {
                padding: 2rem 1.5rem;
              }
              h1 {
                font-size: 2rem;
              }
              h2 {
                font-size: 1.6rem;
              }
              h3 {
                font-size: 1.2rem;
              }
              p {
                font-size: 1rem;
              }
              ul li {
                font-size: 1rem;
              }
            }
          `}</style>
        </div>
      </div>
    </Layout>
  );
}
