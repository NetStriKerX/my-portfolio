function Portfolio() {
  return (
    <>
      <div className="flex justify-between px-52 p-6">
        <h2 className="font-bold text-2xl text-left">Portfolio</h2>
        <a className="text-[rgb(0,0,0,0.5)]" href="">
          See More →
        </a>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-2 px-36 my-12">
        <a
          href="https://netstrikerx.github.io/robofriends/"
          className="flex justify-center items-center"
          target="_blank"
        >
          <img
            src="../../src/img/Robot.png"
            alt="robofriend"
            width="auto"
            height="auto"
            className="rounded-lg"
          />
        </a>
        <a
          href="https://netstrikerx.github.io/my-web/"
          className="flex justify-center items-center"
          target="_blank"
        >
          <img
            src="../../src/img/firstport.png"
            alt="my first web portfolio"
            width="auto"
            height="auto"
            className="rounded-lg"
          />
        </a>
        <a
          href="https://netstrikerx.github.io/background-generator/"
          className="flex justify-center items-center"
          target="_blank"
        >
          <img
            src="../../src/img/background-generator.png"
            alt="background generator"
            width="auto"
            height="auto"
            className="rounded-lg"
          />
        </a>
        <a
          href="https://netstrikerx.github.io/"
          className="flex justify-center items-center"
          target="_blank"
        >
          <img
            src="../../src/img/landing-page.png"
            alt="landing page"
            width="auto"
            height="auto"
            className="rounded-lg"
          />
        </a>
      </div>
    </>
  );
}

export default Portfolio;
