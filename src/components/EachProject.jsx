function EachProject() {
  const projects = [
    {
      href: "https://netstrikerx.github.io/robofriends/",
      src: "../../img/Robot.png",
      name: "robofriend",
    },
    {
      href: "https://netstrikerx.github.io/my-web/",
      src: "../../img/firstport.png",
      name: "my first web portfolio",
    },
    {
      href: "https://netstrikerx.github.io/background-generator/",
      src: "../../img/background-generator.png",
      name: "background generator",
    },
    {
      href: "https://main--sensational-hummingbird-892041.netlify.app/",
      src: "../../public/img/face-detection.png",
      name: "face detection",
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-3 px-36 my-12">
      {projects.map((project, index) => {
        return (
          <div>
            <a
              href={project.href}
              className="flex justify-center items-center"
              target="_blank"
            >
              <img
                src={project.src}
                alt={project.name}
                width="auto"
                height="auto"
                className="rounded-lg aspect-video object-cover"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default EachProject;
