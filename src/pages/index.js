import Layout from '../Layout';
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        {/* Primary Meta Tags */}
        <title>Sajjad Ali Noor - Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Explore the work of Sajjad Ali Noor, a skilled Python Developer specializing in AI, chatbot development, automation, and data-driven AI solutions." />
        <meta name="keywords" content="Python developer, AI enthusiast, chatbot development, automation, machine learning, data analysis, web scraping, NLP" />
        <meta name="author" content="Sajjad Ali Noor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sajjadalinoor.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#b22222" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sajjadalinoor.vercel.app/" />
        <meta property="og:title" content="Welcome to Sajjad Ali Noor’s Portfolio | Full Stack Developer & AI Enthusiast" />
        <meta property="og:description" content="Discover Python development, AI solutions, and more in Sajjad Ali Noor’s portfolio, showcasing projects in automation, AI, and chatbot development." />
        <meta property="og:image" content="https://sajjadalinoor.vercel.app/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sajjadalinoor.vercel.app/" />
        <meta name="twitter:title" content="Sajjad Ali Noor’s Portfolio" />
        <meta name="twitter:description" content="Full Stack Developer & AI enthusiast—check out my projects in Python, automation, and chatbots." />
        <meta name="twitter:image" content="https://sajjadalinoor.vercel.app/twitter-image.png" />

        {/* Internal Styles */}
        <style jsx>{`
          :global(html, body) {
            margin: 0;
            padding: 0;
            font-family: 'Open Sans', sans-serif;
            background-color: #fff;
            color: #333;
            scroll-behavior: smooth;
          }
          h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
            color: #b22222;
            margin-top: 0;
          }
          h1 {
            font-size: 3rem;
            text-align: center;
            margin: 3rem 0 1rem 0;
            letter-spacing: 2px;
            text-shadow: 1px 1px 3px rgba(178, 34, 34, 0.3);
          }
          .subtitle {
            display: block;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 400;
            color: #666;
            margin-bottom: 3rem;
            letter-spacing: 1px;
          }
          .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 0 1.5rem 4rem 1.5rem;
          }
          .section-title {
            font-weight: 700;
            font-size: 2.25rem;
            margin-bottom: 2rem;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border-bottom: 3px solid #b22222;
            padding-bottom: 0.25rem;
          }
          .section-subtitle {
            font-weight: 600;
            color: #b22222;
            margin-bottom: 1rem;
            font-size: 1.3rem;
            text-align: center;
          }
          .highlight-underline {
            text-decoration: underline;
            margin: 0 0.3rem;
          }
          .section-content {
            font-size: 1.15rem;
            color: #444;
            line-height: 1.75;
            max-width: 750px;
            margin: 0 auto 2.5rem auto;
            text-align: center;
          }
          ul {
            list-style: inside disc;
            margin: 0;
            padding-left: 1.25rem;
            color: #555;
            font-size: 1.1rem;
            line-height: 1.6;
          }
          ul li {
            margin-bottom: 0.7rem;
          }
          .row {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
          }
          .col-md-6 {
            flex: 1 1 45%;
            min-width: 280px;
          }
          .fw-bold {
            font-weight: 700;
            margin-bottom: 1rem;
            color: #b22222;
          }
          @media (max-width: 600px) {
            h1 {
              font-size: 2.2rem;
            }
            .section-title {
              font-size: 1.75rem;
            }
            .col-md-6 {
              flex: 1 1 100%;
            }
            .section-content {
              padding: 0 1rem;
            }
          }
          /* Button styling for "Let's Connect" CTA if you want to add later */
          .btn-primary {
            background-color: #b22222;
            color: #fff;
            border: none;
            padding: 0.75rem 1.75rem;
            font-size: 1.1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
          }
          .btn-primary:hover {
            background-color: #8b1a1a;
          }
        `}</style>
      </Head>

      <div style={{ background: "white", minHeight: "100vh" }}>
        {/* Hero Section */}
        <header className="container" role="banner">
          <h1>
            <span>Sajjad Ali Noor</span>
            <br />
            <span className="subtitle">Full Stack Developer & AI Enthusiast</span>
          </h1>
        </header>

        {/* Introduction Section */}
        <section className="container">
          <h3 className="section-subtitle">
            <span className="highlight-underline">Web Application Development</span> | 
            <span className="highlight-underline">Frontend and Backend Development</span> | 
            <span className="highlight-underline">Chatbot Development</span>
          </h3>
          <p className="section-content">
            I am passionate about leveraging technology to solve real-world problems. Whether it's developing a role-based clinical management system or enhancing user interactions with intelligent chatbots, my goal is always to transform ideas into functional, meaningful code.
          </p>
        </section>

        {/* Skills & Technologies Section */}
        <section className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold">Web Application Development</h4>
              <ul>
                <li><strong>Full-Stack Development:</strong> Extensive experience building scalable web applications with React for frontend and Python for backend, integrated with PostgreSQL for data storage.</li>
                <li><strong>Project Highlight:</strong> Developed a clinic management system featuring role-based dashboards for doctors, front desk staff, and admins. Integrated with chatbot functionality for patient management.</li>
                <li><strong>Deployment & DevOps:</strong> Skilled in deploying projects via Railway, Vercel, and CI/CD pipelines, ensuring scalable and production-ready applications.</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="fw-bold">Front-End Development</h4>
              <ul>
                <li><strong>React.js:</strong> Expertise in building dynamic, responsive UIs using React.js and Tailwind CSS for fast, scalable applications.</li>
                <li><strong>UX/UI Design:</strong> Focused on delivering user-centered designs from wireframes to high-fidelity mockups that improve usability.</li>
                <li><strong>Role-Based Dashboards:</strong> Developed personalized, role-specific dashboards for doctors, front desk staff, and admins in a clinic management system.</li>
                <li><strong>Integration:</strong> Embedded Odoo ERP modules via iframes and API-driven components within React apps for seamless functionality.</li>
              </ul>
            </div>
          </div>

          <div className="row" style={{ marginTop: "2.5rem" }}>
            <div className="col-md-6">
              <h4 className="fw-bold">Chatbot Development</h4>
              <ul>
                <li><strong>Python & NLP:</strong> Developed AI-driven chatbots using Python and Natural Language Processing to process dynamic conversations and automate real-world tasks.</li>
                <li><strong>Conversational Flows:</strong> Designed intelligent, context-aware decision trees to improve user interaction and provide accurate responses.</li>
                <li><strong>Clinical Workflow Integration:</strong> Integrated chatbots with clinic management systems to assist doctors in managing patients, appointments, and notifications.</li>
                <li><strong>Chatbot Optimization:</strong> Continuously enhanced chatbot performance by improving intent recognition and response generation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why I Do What I Do */}
        <section className="container">
          <h2 className="section-title">Why I Do What I Do</h2>
          <p className="section-content">
            What excites me most about development and AI is the potential to make a meaningful impact. Whether automating tedious tasks, creating intelligent systems, or improving user experiences, I’m driven by the belief that good code can transform businesses and everyday life. I am constantly inspired by how technology can change the world and solve complex problems.
          </p>
        </section>

        {/* Let's Connect */}
        <section className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-content">
            If you have a project in mind or want to collaborate, feel free to reach out! I'm always excited to explore new ideas and create solutions that make a real difference.
          </p>
          {/* Optional button for contact */}
          {/* <button className="btn-primary">Contact Me</button> */}
        </section>
      </div>
    </Layout>
  );
}
