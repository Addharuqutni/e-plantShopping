import { useNavigate } from 'react-router-dom';
import '../LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-tagline">Where Green Meets Serenity</p>
        <div className="company-description">
          <p>Welcome to Paradise Nursery, your trusted source for premium quality plants since 2010. 
          We specialize in a wide variety of air-purifying, aromatic, and medicinal plants that bring 
          nature's beauty and benefits into your home and workspace. Our expert horticulturists carefully 
          nurture each plant to ensure they thrive in your care, creating a greener, healthier environment 
          for you and your loved ones.</p>
        </div>
        <button 
          className="get-started-button" 
          onClick={() => navigate('/products')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;