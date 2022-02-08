import Link from "next/link";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <>
      <h2>Welcome</h2>

      <p>
        I see you have found home, where every car geek lives. This website was
        made for you and what you are most interested in, cars.
      </p>
      <p>
        We teach and learn all about cars, from the most simple things such as a
        steering wheel&apos;s main function to the most complex components of a
        car.
      </p>
      <p>
        So get comfortable for all the blogs, the videos and all the contents in
        this website. This is your new home now. Welcome Home.
      </p>

      <p>There are 3 levels of information.</p>
      <div className="welcome-grid-items">
        <Link href="/">
          <a className="welcome-item">
            <h3>Beginner</h3>
            <div className="welcome-content">
              <p>
                This is the content for al for the people who want to learn
                about a car body and its basic outer parts.
              </p>
              <i className="fas fa-chevron-right"></i>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a className="welcome-item">
            <h3>Intermediate</h3>
            <div className="welcome-content">
              <p>
                This is the content for al for the people who want to learn
                about a car body and its basic outer parts.
              </p>
              <i className="fas fa-chevron-right"></i>
            </div>
          </a>
        </Link>
        <motion.div exit={{}}>
          <Link href="/">
            <a className="welcome-item">
              <h3>Expert</h3>
              <div className="welcome-content">
                <p>
                  This is the content for al for the people who want to learn
                  about a car body and its basic outer parts.
                </p>
                <i className="fas fa-chevron-right"></i>
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
