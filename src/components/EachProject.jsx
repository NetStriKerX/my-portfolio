function EachProject() {
  const projects = [
    {
      href: "https://home-service-app.vercel.app/",
      src: "../../img/Home-Service.png",
      name: "Home Service",
    },
    {
      href: "https://main--sensational-hummingbird-892041.netlify.app/",
      src: "../../img/face-detection.png",
      name: "face detection",
    },
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
  ];

  return (
    <div className="grid gap-4 grid-cols-3 px-36 my-12">
      {projects.map((project, index) => {
        return (
          <div className="border-2 border-gray-300 rounded-xl">
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
