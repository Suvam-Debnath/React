import './App.css'
function App() {

const name = "Suvam Debnath";
const profession = "web developer";
const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  }
]

  return (
    <div className="App">
      <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>I am {name}, a passionate {profession} with experience in building responsive and user-friendly websites. </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>Feel free to reach out to me at <a href="mailto:suvam@email.com">suvam@email.com</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>2026. {name}. All rights reserved.</p>
      </footer>
    </div>
    
  )
}

export default App
