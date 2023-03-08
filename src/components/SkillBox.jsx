import SkillCard from "./SkillCard";

function SkillBox() {
  const skills = [
    {
      name: "communicative",
      imgUrl: "../../Icon/1.png",
    },
    { name: "professional", imgUrl: "../../Icon/2.png" },
    { name: "collaborative", imgUrl: "../../Icon/3.png" },
    { name: "client's favourite", imgUrl: "../../Icon/4.png" },
  ];
  return (
    <div className="p-28">
      <h2 className="font-bold text-2xl p-12">Why Hire Me?</h2>
      <div className="flex gap-6">
        {skills.map((skill, index) => {
          return <SkillCard skill={skill} key={index} />;
        })}
      </div>
    </div>
  );
}

export default SkillBox;
