import Layout from '../Layout';

import Head from "next/head"

export default function Portfolio() { 
  const projects = [
    {
      title: "Movie Match Maker",
      description:
        "I specialize in building recommendation systems, data-driven insights, and visualization using Python. I analyze user preferences, compute similarity scores, and generate personalized recommendations to enhance decision-making. Additionally, I leverage data visualization to uncover trends and patterns in user behavior.",
      link: "https://github.com/Sajjad5037/movie_match_maker/settings",
    },
    {
      title: "Smart Home Evaluator",
      description:
        "I specialize in predictive modeling, data preprocessing, and machine learning automation using Python. I develop regression models to estimate house prices, optimize parameters through grid search, and implement scalable solutions for real estate analytics. Additionally, I integrate user-friendly interfaces for real-time price predictions.",
      link: "https://github.com/Sajjad5037/Smart_Home_evaluator/blob/main/Smart_home_evaluator.py",
    },
    {
      title: "Income Predictor AI",
      description:
        "I specialize in machine learning, data analysis, and automation using Python. I build predictive models, extract insights from data, and automate processes to help businesses make smarter decisions. My expertise includes AI-driven forecasts, data visualization, and efficiency optimization, saving you time and boosting profitability. Let’s turn data into your advantage!",
      link: "https://github.com/Sajjad5037/Income_Prediction_Using_Random_Forest_Classifier",
    },
    {
      title: "Smart Loan Predictor",
      description:
        "I create AI-powered solutions that transform data into intelligent, automated decision-making tools. By integrating AI-driven analysis and predictions, I help businesses enhance efficiency, optimize workflows, and provide real-time, actionable insights. Whether it’s automation, intelligent assistants, or predictive systems, I build custom AI solutions that seamlessly fit your business needs.",
      link: "https://github.com/Sajjad5037/SmartLoanPredictor/blob/main/SmartLoanPredictor.py",
    },
    {
      title: "Email Spam Detection",
      description:
        "I specialize in building machine learning models for spam detection, leveraging Naive Bayes classification to analyze email content. I design probability-based classifiers that efficiently distinguish between spam and ham, applying Laplace smoothing to handle unseen words. My approach includes optimizing feature selection, preprocessing text data, and implementing scalable solutions for real-time email filtering.",
      link: "https://github.com/Sajjad5037/Naive_Bayes_Classifier_for_Spam_Detection_in_Emails",
    },
    {
      title: "Visualizing Excel Data Using Charts",
      description:
        "I specialize in data analysis, visualization, and business intelligence automation using Python. I develop sales analytics solutions that process and transform raw data into actionable insights. My approach includes aggregating sales trends, optimizing data preparation pipelines, and creating interactive visualizations to enhance decision-making. Additionally, I design scalable workflows for tracking product performance and revenue growth.",
      link: "https://github.com/Sajjad5037/Visualilze_sales_data/blob/main/Visualize_sales_data.py",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Sajjad Ali Noor | Python Developer & AI Enthusiast Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Sajjad Ali Noor, a skilled Python Developer and AI Enthusiast. Discover a variety of projects and services in automation, AI, web development, and more."
        />
        <meta
          name="keywords"
          content="Portfolio, Python Developer, AI Enthusiast, Sajjad Ali Noor, Python Projects, Automation, AI, Machine Learning, Software Development, Web Development"
        />
        <meta name="author" content="Sajjad Ali Noor" />
        <meta property="og:title" content="Sajjad Ali Noor | Python Developer & AI Enthusiast Portfolio" />
        <meta
          property="og:description"
          content="Browse the portfolio of Sajjad Ali Noor, showcasing projects in Python, AI, and automation. Learn more about my work in software and web development."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-portfolio-image.jpg" // (Replace with your portfolio image or a relevant visual)
        />
        <meta property="og:url" content="https://yourwebsite.com/portfolio" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div
        
        style={{
          background: "linear-gradient(to right, #f0f0f0, #d9d9d9)",
          minHeight: "100vh",
          padding: "50px 0",
        }}
      >
        <div className="container mt-4">
          <h1 className="text-center">My Work</h1>
          <p className="text-center">Here are some of the projects I have worked on.</p>
        </div>

        <div className="container mt-5">
          
          <div className="row mt-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 d-flex align-items-stretch mb-4">
                <div className="card shadow-sm p-4 bg-white rounded-4 d-flex flex-column h-100">
                  <h3 className="h5">{project.title}</h3>
                  <p className="flex-grow-1">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
