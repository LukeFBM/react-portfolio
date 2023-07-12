import heroImg from "./assets/foto.curriculum.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Luca Capruzzi's React Portfolio</h1>
          <p>
            My name is Luca Capruzzi, from Rome, Italy. This is my personal
            Portfolio entirely made with React. Enjoy its content with all my
            main React Projects in the next session.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="luca-capruzzi" className="img round" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
