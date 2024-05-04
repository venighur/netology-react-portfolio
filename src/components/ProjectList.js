function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {[0, 1, 2].map(col => (
        <div className="project-list-col">
          {projects.map((p, index) => index % 3 === col ? <img key={index} src={p.img} alt="project" /> : null)}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;