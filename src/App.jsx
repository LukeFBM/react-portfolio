import Hero from "./Hero";
import Projects from "./Projects";
import Links from "./Links";
import DevProjects from "./DevProjects";

const App = ({ id, img, url, title }) => {
  return (
    <main>
      <Hero />
      <DevProjects id={id} img={img} url={url} title={title} />
      <Projects id={id} img={img} url={url} title={title} />
      <Links />
    </main>
  );
};
export default App;
