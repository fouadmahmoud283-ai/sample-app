import './App.css'
import pyramidImg from './assets/egypt/pyramid.svg'
import sphinxImg from './assets/egypt/sphinx.svg'
import templeImg from './assets/egypt/temple.svg'
import pharaohImg from './assets/egypt/pharaoh.svg'
import obeliskImg from './assets/egypt/obelisk.svg'

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo-text">Egyptian Pharaoh Tours</a>
          <ul className="nav-links">
            <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a href="#packages" onClick={() => scrollToSection('packages')}>Tours</a></li>
            <li><a href="#destinations" onClick={() => scrollToSection('destinations')}>Destinations</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content fade-in-up">
          <h1>Discover Ancient Egypt</h1>
          <p>Journey through millennia of history with Egyptian Pharaoh Tours. Experience the wonders of the pyramids, temples, and treasures of the pharaohs with our expert guides.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#packages" className="btn btn-primary" onClick={() => scrollToSection('packages')}>
              Explore Tours
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Plan Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="packages" className="section">
        <div className="fade-in-up">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Tour Packages</h2>
          <div className="decorative-border"></div>
          <div className="card-grid">
            <div className="card">
              <img src={pyramidImg} alt="Pyramid Tour" className="egyptian-image" />
              <div className="card-icon">🏛️</div>
              <h3>Pyramid Explorer</h3>
              <p>Visit the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World. Explore the mysterious chambers and learn about ancient Egyptian burial practices.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <strong style={{ color: 'var(--egyptian-gold)' }}>From $299</strong>
                <br />
                <small style={{ color: 'var(--text-light)' }}>3 days / 2 nights</small>
              </div>
            </div>

            <div className="card">
              <img src={sphinxImg} alt="Sphinx Tour" className="egyptian-image" />
              <div className="card-icon">🦁</div>
              <h3>Sphinx & Secrets</h3>
              <p>Uncover the mysteries of the Great Sphinx and explore the ancient necropolis of Giza. Discover hidden chambers and ancient Egyptian mythology.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <strong style={{ color: 'var(--egyptian-gold)' }}>From $399</strong>
                <br />
                <small style={{ color: 'var(--text-light)' }}>4 days / 3 nights</small>
              </div>
            </div>

            <div className="card">
              <img src={templeImg} alt="Temple Tour" className="egyptian-image" />
              <div className="card-icon">⛩️</div>
              <h3>Temple Treasures</h3>
              <p>Journey through the magnificent temples of Luxor and Karnak. Experience the grandeur of ancient Egyptian architecture and religious ceremonies.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <strong style={{ color: 'var(--egyptian-gold)' }}>From $599</strong>
                <br />
                <small style={{ color: 'var(--text-light)' }}>7 days / 6 nights</small>
              </div>
            </div>

            <div className="card">
              <img src={pharaohImg} alt="Pharaoh Tour" className="egyptian-image" />
              <div className="card-icon">👑</div>
              <h3>Pharaoh's Legacy</h3>
              <p>Follow in the footsteps of legendary pharaohs. Visit royal tombs, treasure chambers, and learn about the golden age of ancient Egypt.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <strong style={{ color: 'var(--egyptian-gold)' }}>From $899</strong>
                <br />
                <small style={{ color: 'var(--text-light)' }}>10 days / 9 nights</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="section section-alt">
        <div className="fade-in-up">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Iconic Destinations</h2>
          <div className="decorative-border"></div>
          <div className="card-grid">
            <div className="card">
              <img src={pyramidImg} alt="Giza Pyramids" className="egyptian-image" />
              <h3>Giza Pyramid Complex</h3>
              <p>Home to the Great Pyramid, the Sphinx, and ancient burial grounds. Experience the last remaining Wonder of the Ancient World.</p>
              <ul style={{ textAlign: 'left', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                <li>Great Pyramid of Khufu</li>
                <li>Pyramid of Khafre</li>
                <li>Pyramid of Menkaure</li>
                <li>The Great Sphinx</li>
              </ul>
            </div>

            <div className="card">
              <img src={templeImg} alt="Luxor Temples" className="egyptian-image" />
              <h3>Luxor - Ancient Thebes</h3>
              <p>The world's greatest open-air museum, featuring magnificent temples and royal tombs along the Nile River.</p>
              <ul style={{ textAlign: 'left', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                <li>Karnak Temple Complex</li>
                <li>Luxor Temple</li>
                <li>Valley of the Kings</li>
                <li>Temple of Hatshepsut</li>
              </ul>
            </div>

            <div className="card">
              <img src={obeliskImg} alt="Cairo Museums" className="egyptian-image" />
              <h3>Cairo - City of Pharaohs</h3>
              <p>Explore the bustling capital with its world-renowned museums and Islamic architecture alongside ancient wonders.</p>
              <ul style={{ textAlign: 'left', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                <li>Egyptian Museum</li>
                <li>Coptic Cairo</li>
                <li>Islamic Cairo</li>
                <li>Khan el-Khalili Bazaar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <div className="fade-in-up">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>About Egyptian Pharaoh Tours</h2>
          <div className="decorative-border"></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginTop: '3rem' }}>
            <div>
              <img src={pharaohImg} alt="Egyptian Heritage" className="egyptian-image" style={{ height: '300px' }} />
            </div>
            <div>
              <h3>Your Gateway to Ancient Egypt</h3>
              <p>For over 20 years, Egyptian Pharaoh Tours has been the premier choice for travelers seeking authentic Egyptian experiences. Our expert Egyptologists and local guides bring ancient history to life with passion and knowledge.</p>
              
              <h3>Why Choose Us?</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <li>✓ Licensed Egyptologist guides</li>
                <li>✓ Small group experiences (max 12 people)</li>
                <li>✓ Exclusive access to restricted sites</li>
                <li>✓ Luxury accommodations</li>
                <li>✓ 24/7 customer support</li>
                <li>✓ Sustainable tourism practices</li>
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <a href="#contact" className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                  Start Your Adventure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="fade-in-up">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Plan Your Egyptian Adventure</h2>
          <div className="decorative-border"></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
            <div className="card">
              <h3>Contact Information</h3>
              <div style={{ textAlign: 'left' }}>
                <p><strong>📍 Address:</strong><br />
                123 Nile Avenue, Cairo, Egypt</p>
                
                <p><strong>📞 Phone:</strong><br />
                +20 2 1234 5678</p>
                
                <p><strong>✉️ Email:</strong><br />
                info@egyptianpharaohtours.com</p>
                
                <p><strong>🕒 Office Hours:</strong><br />
                Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                Friday - Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="card">
              <h3>Quick Inquiry</h3>
              <form style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name:</label>
                  <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email:</label>
                  <input type="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Preferred Tour:</label>
                  <select style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}>
                    <option>Select a tour package</option>
                    <option>Pyramid Explorer</option>
                    <option>Sphinx & Secrets</option>
                    <option>Temple Treasures</option>
                    <option>Pharaoh's Legacy</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message:</label>
                  <textarea rows={4} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Egyptian Pharaoh Tours</h3>
          <p>Discover the wonders of ancient Egypt with expert guides and unforgettable experiences.</p>
          <div className="decorative-border" style={{ margin: '2rem auto', maxWidth: '200px' }}></div>
          <p>&copy; 2024 Egyptian Pharaoh Tours. All rights reserved.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            Licensed by Egyptian Ministry of Tourism | IATA Certified | Sustainable Tourism Partner
          </p>
        </div>
      </footer>
    </>
  )
}

export default App

