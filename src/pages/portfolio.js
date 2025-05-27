import Link from 'next/link';
import Layout from '../Layout';

export default function Portfolio() {
  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="h3 text-center fw-bold">Featured Projects </h2>
        <div className="row mt-4 g-4">
          {/* Left Column - AI-Powered PDF Chatbot */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
              <h3 className="h5 fw-bold">AI-Powered PDF Chatbot with OpenAI</h3>
              <p className="text-muted">
                Our AI-Powered PDF Chatbot turns documents into interactive knowledge bases, delivering instant, accurate answers using OpenAI’s NLP models. Ideal for research, business, or legal work, it eliminates manual PDF searches and boosts productivity.
                <br /><br />
                
              </p>
              <div className="d-flex gap-2 mt-2">
                <Link href="/PdfQuery" className="btn btn-outline-primary">
                  Go to PdfQuery Chatbot
                </Link>
                <a 
                  href="https://www.youtube.com/embed/Yd4SH-8hx0c" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-primary"
                >
                  Demo Video
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Client Management System */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
              <h3 className="h5 fw-bold">Client Management System</h3>
              <p className="text-muted">
                Our Client Management System keeps clients updated with real-time wait times via a live dashboard, reducing confusion and repetitive questions.
                <br /><br />
                An AI-powered chatbot handles FAQs and inquiries, acting as a virtual assistant to streamline communication and lighten your team’s workload.
                <br /><br />
                Boost efficiency and improve customer experience effortlessly.
                <br /><br />
                Test it using: Username: Sarfraz5037 | Password: 123 (only waiting list part is functional)
              </p>
              <div className="d-flex gap-2 mt-2">
                <a
                  href="https://clinic-management-system-27d11.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Client Management System Website
                </a>
                <a
                  href="https://www.youtube.com/embed/HZMLzdJDnZk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Demo Video
                </a>
              </div>
            </div>
          </div>

          {/* New Column - Restaurant Website */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
              <h3 className="h5 fw-bold">Restaurant Website</h3>
              <p className="text-muted">
                This website offers a complete online ordering solution for restaurants, allowing customers to browse the menu, place orders, and track their order status with real-time updates like “Preparing Now” and “Serving Now.”
                <br /><br />
                A custom-built admin dashboard lets restaurant owners manage menu items and handle incoming orders seamlessly, all from one place—making operations efficient and customer communication effortless.
                <br /><br />
                **Want this for your restaurant?** Watch the demo below and contact me to get started — I’ll set everything up for you.
              </p>
              <div className="d-flex gap-2 mt-2">
                <a
                  href="https://rafis-kitchen.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  View Restaurant Website
                </a>
                <a
                  href="https://youtu.be/xx5Ago6oO90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Demo Video
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:proactive1.san@gmail.com?subject=Interested%20in%20Restaurant%20Website%20System" className="btn btn-primary">
                  Start Now – Email Me
                </a>
              </div>
            </div>
          </div>
          {/* New Column - Online Order System and Live Order Tracking */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
              <h3 className="h5 fw-bold">Online Order System and Live Order Tracking</h3>
              <p className="text-muted">
                Pizza Point’s Online Ordering Dashboard offers a modern, efficient way for restaurants to handle orders. Customers can explore a categorized menu, view photos, and place orders with just a few taps.
                <br /><br />
                Each order is instantly delivered to your restaurant’s WhatsApp number, so your team stays updated in real time. This setup is flexible—custom notifications via SMS, email, or other channels can be added to suit your workflow.
                <br /><br />
                Customers enjoy live order tracking, while staff manage everything smoothly through a centralized web dashboard.
                <br /><br />
                <strong>Want this system for your restaurant?</strong> Watch the live demo below and reach out to get started with your tailored version.
              </p>
              <div className="d-flex gap-2 mt-2">
                <a
                  href="https://clinic-management-system-27d11.web.app/pizzapointOnline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Sample Order Online Webpage
                </a>
                <a
                  href="https://youtu.be/eTCiXI6DXPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Demo Video
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:proactive1.san@gmail.com?subject=Interested%20in%20Restaurant%20Website%20System" className="btn btn-primary">
                  Start Now – Email Me
                </a>
              </div>
            </div>
          </div>
                    
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
              <h3 className="h5 fw-bold">Smart Business Assistant – Ask Questions from Your Data</h3>
              <p className="text-muted">
                This AI-powered assistant helps business owners get instant answers from internal data like reservations, sales, or staff schedules—just by asking natural language questions.
                <br /><br />
                Instead of opening dashboards or spreadsheets, simply ask things like: “What are today’s appointments?” or “Who booked a table yesterday?”
                <br /><br />
                Perfect for meetings, mobile use, or quick insights—this assistant is like ChatGPT but trained on your business.
                <br /><br />
                <strong>Want this smart assistant for your business?</strong> Explore the live chatbot and watch a demo to learn more.
              </p>
              <div className="d-flex gap-2 mt-2">
                <Link href="/chatbot_database" legacyBehavior>
                  <a className="btn btn-outline-primary">Try the Business Chatbot</a>
                </Link>
                <a
                  href="https://youtu.be/YOUR_DEMO_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Watch Demo
                </a>
              </div>
            </div>          
          </div>
          


          {/* New Column - Online Ordering System for Milk Shops and Bakeries etc(Speech Recognition Enabled) */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
              <h3 className="h5 fw-bold">Online Ordering System for Milk Shops and Bakeries etc(Speech Recognition Enabled)</h3>
              <p className="text-muted">
                Hajvery Milk Shop’s Online Ordering System offers a seamless and intuitive way for customers to place orders. Customers can explore a categorized menu, adjust quantities, and place orders easily from their device. Once an order is placed, it’s instantly sent to your business’s WhatsApp number, keeping your team informed in real time. You can customize the notification delivery to suit your preferred communication channels, including SMS, email, or more. Plus, customers can place orders using voice commands with the "Speak Order" feature for added convenience.
                <br /><br />
                <strong>Interested in a similar system for your business?</strong> Try the demo below and reach out for a personalized setup.
              </p>
              <div className="d-flex gap-2 mt-2">
                <a
                  href="https://clinic-management-system-27d11.web.app/HajveryOnlineShop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Sample Order Online Webpage
                </a>
                <a
                  href="https://youtu.be/KrQ_SHYozGU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Demo Video
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:proactive1.san@gmail.com?subject=Interested%20in%20Restaurant%20Website%20System" className="btn btn-primary">
                  Start Now – Email Me
                </a>
              </div>
            </div>
          </div>
          {/* New Column - Image Extractor) */}
          <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold">Image Text Extractor – Turn Photos into Editable Text</h3>
            <p className="text-muted">
              This advanced OCR tool combines the power of Google Vision API with OpenAI to extract accurate text from images, scanned documents, or handwritten notes.
              <br /><br />
              It first uses Google's OCR to detect text and then passes the raw output to OpenAI, which intelligently corrects OCR errors and restores the original formatting.
              <br /><br />
              Perfect for digitizing notes, automating data entry, or extracting clean, copyable text from challenging sources like handwritten content or low-quality scans.
              <br /><br />
              <strong>Need to recover exact text from an image?</strong> 
            </p>
            <div className="d-flex gap-2 mt-2">
              
              <Link href="/image_text_extractor" legacyBehavior>
                <a className="btn btn-outline-primary">Try Image Text Extractor</a>
              </Link>              
            </div>
          </div>
        </div>
        
      </div>

    </Layout>
  );
}
