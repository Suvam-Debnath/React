function Project() {
    const project = [
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
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {project.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;