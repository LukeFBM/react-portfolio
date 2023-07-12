import Hero from "./Hero";
import Projects from "./Projects";
import Links from "./Links";

const App = ({ id, img, url, title }) => {
  return (
    <main>
      <Hero />
      <Projects id={id} img={img} url={url} title={title} />
      <Links />
    </main>
  );
};
export default App;
