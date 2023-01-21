import { useRef } from "react";
import Navbar from "./components/Navbar";
import image1 from "./Images/1.png";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.jpg";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import image6 from "./Images/6.jpg";
import image7 from "./Images/7.png";

function App() {
  return (
    <>
      <section className="section-1">
        <Navbar />
        <div className="banner">
          <div className="hero">
            <img src={image1} alt="card-1" />
          </div>
          <div>
            <h1>
              Learn all IT courses
              <br />
              from IT Experts
            </h1>
            <button className="btn">enroll now</button>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className="section-center">
          <div className="info">
            <h2>Meet our Founder</h2>
            <p>
              Our Founder Mr. Kunal Sharma has designed and delivered the
              Quencil Java Full Stack Developer (JFSD) course, which is a 1000+
              hour comprehensive, intensive, immersive, Edutainment based 360°
              Skills program and is a full one-stop solution to pursue your IT
              professional goals.
            </p>
            <br />
            <p>
              The Quencil JFSD Program is structured as a hands-on case study
              and real-time project-based learning approach that will enable
              every trained aspirant to improve their analytical and
              problem-solving skills by structuring, designing, coding, testing,
              and deploying end-to-end Full Stack software solutions to real-
              time scenarios using Modeling and DevOps concepts.
            </p>
            <button className="section-2-btn">LEARN MORE</button>
          </div>
          <div>
            <div className="img"></div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="heading">
          <h3>Case Studies & Projects</h3>
          <p className="heading-para">
            SOLUTIONS TO REAL-TIME SCENARIOS ON BOTH CLIENT SIDE & SERVER SIDE.
          </p>
        </div>
        <div className="cards">
          <div className="card-1">
            <div>
              <img src={image2} alt="card-1" />
            </div>
            <div>
              <h4>PLANNING</h4>
              <p>Understanding The Problem Statement.</p>
              <p>Ask WHO, WHAT, WHEN, WHERE, WHY?</p>
              <p>Create Clear Business Objective Statement</p>
            </div>
          </div>
          <div className="card-2">
            <div>
              <img src={image3} alt="card-2" />
            </div>
            <div>
              <h4>REQUIREMENT ANALYSIS</h4>
              <p>Identify User-Story Elaborations</p>
              <p>Identify Scope & Scope-Creep</p>
              <p>Identify Functional & Non- Functional Requirements</p>
            </div>
          </div>
          <div className="card-3">
            <div>
              <img src={image4} alt="card-3" />
            </div>
            <div>
              <h4>DESIGN & MODELING</h4>
              <p>Use-Case Diagrams</p>
              <p>Activity Diagrams</p>
              <p>Class Diagrams</p>
              <p>Sequence Diagrams</p>
            </div>
          </div>
          <div className="card-4">
            <div>
              <img src={image5} alt="card-4" />
            </div>
            <div>
              <h4>CODING & UNIT TESTING</h4>
              <p>Develop UI/UX Using Frontend Technologies</p>
              <p>Code Business Logic Using Backend Technologies</p>
              <p>Store & Retire Data Using Database Technologies</p>
            </div>
          </div>
          <div className="card-5">
            <div>
              <img src={image6} alt="card-5" />
            </div>
            <div>
              <h4>INTEGRATION & DEPLOYMENT</h4>
              <p>Build</p>
              <p>Test</p>
              <p>Package</p>
              <p>Deploy</p>
              <p>Release Java Full-Stack Product</p>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className="section-center">
          <div className="info">
            <h2>Why should you join Quencil?</h2>
            <p>
              No Matter What It Takes! We Will Empower You If You Have The
              <br />
              Confidence And Willingness To Study Coding.
            </p>
            <br />
            <p>
              IIT And Stanford Alumni Created The Content.
              <br />
              Instant 1:1 Resolution Of Doubts
            </p>
            <br />

            <p>
              Each Course Includes 100+ Problems And 10+ Projects For
              <br />
              Hands-On Learning.
            </p>
          </div>
          <div>
            <div>
              <img src={image7} alt="section-4-img" className="big-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="heading">
          <h3>Our Alumni Works In Top Companies</h3>
        </div>
        <div className="divs">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="common-section">
        <div className="section-center">
          <div className="info">
            <h2>Detailed Placements Drive Analysis</h2>
            <p className="width">
              Quencil has created a strong network of prestigious Corporate
              Clients. A commitment to filling colours into our Trainees'
              ambitions and aspirations by persistently preparing them for fast-
            </p>
            <p className="width">
              changing future skills and future workplaces is at the heart of
              our Placements team's DNA. Our corporate clientele includes top
              MNCs, mid-sized organisations, and IT start-up initiatives, and
              spans both service and product-based businesses. Our prestigious
              clients hire throughout the year to meet their project-specific
              skilled fresher requirements. We exclusively work with technical
              job roles and do not work with Tech-Support/KPO/BPO sorts of jobs
            </p>
            <button className="section-2-btn">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* <script>

</script> */}
    </>
  );
}

export default App;
