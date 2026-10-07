import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { SITE, boats, faqs, images } from "./data";
import "./styles.css";

const wa = () => {
  window.location.href = SITE.whatsapp;
};

const Icon = ({ name, size = 22 }) => {
  const paths = {
    lamp: (
      <>
        <path d="M7 14h10l-1.2 4H8.2L7 14Z" />
        <path d="M9 11c0-3 3-4 3-7 2 2 3 4 1.8 6.2-.8 1.4-2.2 1.8-2.8.8-.7-1.2.4-2.5 1.1-3.4" />
        <path d="M4 19h16" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z" />
        <path d="M9 8.4c.2-.4.5-.4.8-.3l.7 1.7c.1.3 0 .5-.2.7l-.5.5c.5 1 1.3 1.7 2.4 2.2l.5-.5c.2-.2.5-.3.7-.2l1.6.8c.3.1.3.4.2.7-.3 1-1.1 1.5-2 1.3-3.5-.8-5.8-3.1-6.5-5.8-.2-.8.2-1.7 1.3-2Z" />
      </>
    ),
    phone: (
      <path d="M7.5 3.5 10 3l1.4 3.5-1.7 1.3a11 11 0 0 0 4.5 4.5l1.3-1.7L19 12l-.5 2.5c-.2 1-1.1 1.7-2.1 1.7C10.5 16.2 7 12.5 6 8.7c-.3-1.2.3-2.6 1.5-3.1Z" />
    ),
    lotus: (
      <>
        <path d="M12 18c-3.5-4.5-7.7-4.4-9-1 3.8 2.4 7.2 2.2 9 1Z" />
        <path d="M12 18c3.5-4.5 7.7-4.4 9-1-3.8 2.4-7.2 2.2-9 1Z" />
        <path d="M12 18c-4.5-2.3-4.7-7.1 0-11 4.7 3.9 4.5 8.7 0 11Z" />
        <path d="M12 7c-1.2-2.1-1.2-4 0-5 1.2 1 1.2 2.9 0 5Z" />
      </>
    ),
    boat: (
      <>
        <path d="M4 15h16l-2.2 4H6.2L4 15Z" />
        <path d="M8 15V8h8v7M10 8V5h4v3" />
        <path d="M3 21c2 1.3 4 1.3 6 0 2 1.3 4 1.3 6 0 2 1.3 4 1.3 6 0" />
      </>
    ),
    camera: (
      <>
        <path d="M6 7h2l1.2-2h5.6L16 7h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
        <circle cx="12" cy="12.5" r="3.2" />
      </>
    ),
    shield: (
      <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Zm-3 9 2 2 4-4" />
    ),
    star: (
      <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 5.9-5.4-2.8-5.4 2.8 1-5.9L3.3 9.4l6-.9L12 3Z" />
    ),
  };

  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

function App() {
  const [open, setOpen] = useState(null);
  const [light, setLight] = useState(null);
  const [menu, setMenu] = useState(false);

  const navItems = ["Home", "Boats", "Gallery", "About", "FAQ"];

  return (
    <>
      <header className="nav">
        <a className="brand" href="#home" onClick={() => setMenu(false)}>
          <span className="brand-art">
            <Icon name="lamp" size={35} />
          </span>
          <span className="brand-copy">
            <b>Dev Deepawali</b>
            <small>VARANASI</small>
          </span>
        </a>

        <nav className={menu ? "open" : ""}>
          {navItems.map((item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              onClick={() => setMenu(false)}
            >
              {item}
            </a>
          ))}
          <button className="gold nav-cta" onClick={wa}>
            <Icon name="whatsapp" size={16} /> Book Now
          </button>
        </nav>

        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Open navigation"
          aria-expanded={menu}
        >
          ☰
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="hero-shade" />

          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">
              <i /> Experience the divine <i />
            </span>

            <h1>
              Dev Deepawali
              <br />
              <em>Boat Tour</em>
            </h1>

            <p>
              Witness the magical sight of thousands of diyas illuminating the
              ghats of Varanasi — once a year, a spiritual spectacle, best
              experienced from the river.
            </p>

            <div className="actions">
              <button className="whatsapp" onClick={wa}>
                <Icon name="whatsapp" size={17} /> Book via WhatsApp
              </button>
              <a className="outline" href={SITE.tel}>
                <Icon name="phone" size={17} /> Call Now
              </a>
            </div>

            <div className="hero-trust">
              <span>
                <Icon name="lotus" size={29} />
                <b>
                  Spectacular
                  <br />
                  Ghat Views
                </b>
              </span>
              <span>
                <Icon name="boat" size={29} />
                <b>
                  Comfortable
                  <br />
                  Boats
                </b>
              </span>
              <span>
                <Icon name="camera" size={29} />
                <b>
                  Unforgettable
                  <br />
                  Moments
                </b>
              </span>
            </div>
          </div>
        </section>

        <section id="boats" className="boats-section">
          <div className="center">
            <span className="eyebrow section-eyebrow">
              <i /> Our boats <i />
            </span>
            <h2>Choose Your Perfect Experience</h2>
            <p>
              We offer a range of boats to make your Dev Deepawali experience
              special, comfortable and memorable.
            </p>
          </div>

          <div className="boat-grid">
            {boats.map((boat) => (
              <article className="boat" key={boat.title}>
                <div className="boat-image">
                  <img src={images[boat.image].src} alt={images[boat.image].alt} />
                </div>
                <div className="boat-body">
                  <h3>{boat.title}</h3>
                  <p>
                    <Icon name="boat" size={14} /> {boat.capacity}
                  </p>
                  <span className="price">Price on Request</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="center">
            <span className="eyebrow section-eyebrow">
              <i /> Gallery <i />
            </span>
            <h2>Moments That Stay Forever</h2>
            <p>
              A glimpse of the divine beauty, glowing ghats and serene boat
              rides.
            </p>
          </div>

          <div className="gallery">
            {images.map((image, index) => (
              <button
                key={image.src}
                className={"g g" + index}
                onClick={() => setLight(index)}
                aria-label={"Open " + image.alt}
              >
                <img
                  loading={index < 2 ? "eager" : "lazy"}
                  src={image.src}
                  alt={image.alt}
                />
              </button>
            ))}
          </div>
        </section>

        <section id="about" className="benefits">
          <div>
            <span className="benefit-icon">
              <Icon name="lotus" size={34} />
            </span>
            <h3>Spiritual Experience</h3>
            <p>Witness the unique blend of faith, culture and tradition.</p>
          </div>
          <div>
            <span className="benefit-icon">
              <Icon name="camera" size={34} />
            </span>
            <h3>Unmatched Views</h3>
            <p>Best views of illuminated ghats from the comfort of your boat.</p>
          </div>
          <div>
            <span className="benefit-icon">
              <Icon name="shield" size={34} />
            </span>
            <h3>Safe &amp; Comfortable</h3>
            <p>Comfort-focused boat experience with details confirmed at booking.</p>
          </div>
          <div>
            <span className="benefit-icon">
              <Icon name="star" size={34} />
            </span>
            <h3>Limited Time</h3>
            <p>This is a once-a-year event. Don't miss it!</p>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="center">
            <span className="eyebrow section-eyebrow">
              <i /> FAQ <i />
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((question, index) => (
              <div className="faq-row" key={question}>
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  aria-expanded={open === index}
                >
                  <span>{question}</span>
                  <b>{open === index ? "−" : "⌄"}</b>
                </button>
                {open === index && (
                  <p>
                    Please contact us on WhatsApp for the latest availability,
                    pricing and booking details.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="mobile-bar">
        <button onClick={wa}>
          <Icon name="whatsapp" size={17} /> Book via WhatsApp
        </button>
        <a href={SITE.tel}>
          <Icon name="phone" size={17} /> Call Now
        </a>
      </div>

      {light !== null && (
        <div className="lightbox" onClick={() => setLight(null)}>
          <button
            aria-label="Close gallery"
            onClick={() => setLight(null)}
          >
            ×
          </button>
          <img src={images[light].src} alt={images[light].alt} />
          <span>{images[light].credit}</span>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
