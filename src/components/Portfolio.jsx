import EachProject from "./EachProject";

function Portfolio() {
  return (
    <>
      <div className="flex justify-between px-52 p-6">
        <h2 className="font-bold text-2xl text-left">Portfolio</h2>
        <a
          className="text-[rgb(0,0,0,0.5)]"
          href="https://github.com/NetStriKerX"
          target="_blank"
        >
          See More →
        </a>
      </div>
      <EachProject />
    </>
  );
}

export default Portfolio;
