import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

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
          animation: 'scroll-text 30s linear infinite',
        }}>
          🚨 Welcome to Shah Rukh's AI Services – Fast, Smart & Reliable! 🚨
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-text {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* ✅ Updated Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
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
              {[
                { label: "Home", href: "/" },
                { label: "Essay Checker", href: "https://class-management-system-new.web.app/" },
                { label: "Reading Material", href: "/about" },
                { label: "Attempted Questions", href: "/about" },
                { label: "Time Table Maker", href: "/about" },
                { label: "Video Lecture", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link href={item.href} legacyBehavior>
                    <a
                      className="nav-link text-black fw-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
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

      {/* 🔗 Social Media Vertical Bar */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRight: 'none',
        borderRadius: '8px 0 0 8px',
        padding: '10px 5px',
        zIndex: 1030,
      }}>
        <div className="d-flex flex-column align-items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/32/733/733547.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/32/733/733558.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/32/733/733579.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/32/733/733561.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <main className="flex-grow-1">{children}</main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <small>
            &copy; {new Date().getFullYear()} Shah Rukh. All rights reserved. <br />
            Email: <a href="mailto:proactive1.san@gmail.com" className="text-white">mshahrukhhaider@gmail.com@gmail.com</a> |{' '}
            <a href="https://www.linkedin.com/in/sajjad-ali-noor-633b9432b/" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
            <a href="https://github.com/Sajjad5037" className="text-white" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href="https://www.upwork.com/freelancers/~01b6b8db86416c0fea" className="text-white" target="_blank" rel="noopener noreferrer">Upwork</a>
          </small>
        </div>
      </footer>
    </div>
  );
}
