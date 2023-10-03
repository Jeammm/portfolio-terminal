import projects from "../projectsList";

const Projects = () => {
  return (
    <div className="relative mt-3">
      {projects.map((p, index) => (
        <>
          <div>
            <a
              className="text-pink cursor-pointer underline"
              href={p.url}
              target="_blank"
            >
              {`${index + 1}.) `}
              <strong>{p.projectName}</strong>
            </a>
          </div>
          <p>{p.desc}</p>
          <p>----------</p>
        </>
      ))}
    </div>
  );
};

export default Projects;
