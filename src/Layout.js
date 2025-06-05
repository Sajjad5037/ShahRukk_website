import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from './Chatbot'; // Adjust path as needed

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* 🔴 Scrolling Red Stripe */}
      <div style={{
        backgroundColor: 'red',
        color: 'white',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'scroll-text 15s linear infinite',
        }}>
          🚨 Welcome to Shah Rukh's AI Services – Fast, Smart & Reliable! 🚨
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-text {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="w-100">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link text-white">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/essay_checker" legacyBehavior>
                  <a className="nav-link text-white" target="_blank" rel="noopener noreferrer">
                    Essay Checker
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link text-white" target="_blank" rel="noopener noreferrer">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link text-white" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-3 text-center">
        <img
          src="https://i.postimg.cc/VvGKhTGC/images.jpg"
          alt="Decorative Banner"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>

      <main className="flex-grow-1">{children}</main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <small>
            &copy; {new Date().getFullYear()} Shah Rukh. All rights reserved. <br />
            Email: <a href="mailto:proactive1.san@gmail.com" className="text-white">abc@gmail.com</a> |{' '}
            <a href="https://www.linkedin.com/in/sajjad-ali-noor-633b9432b/" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
            <a href="https://github.com/Sajjad5037" className="text-white" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href="https://www.upwork.com/freelancers/~01b6b8db86416c0fea" className="text-white" target="_blank" rel="noopener noreferrer">Upwork</a>
          </small>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
