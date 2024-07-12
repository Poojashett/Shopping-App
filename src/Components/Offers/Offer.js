import "./Offer.css";

const Offer = () => {
  return (
    <div className="best-offers">
      <div className="offer-card">
        <video autoPlay muted loop className="background-video">
          <source
            src="https://videos.pexels.com/video-files/5889466/5889466-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="offer-details">
          <h2>Best Offers for You</h2>
          <button className="check-now-btn">Check Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
