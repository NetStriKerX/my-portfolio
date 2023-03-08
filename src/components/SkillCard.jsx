function SkillCard(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#2222221A] w-20 h-20 mb-5 rounded-full flex justify-center items-center">
        <img src={props.skill.imgUrl} alt="" className="h-[40px]" />
      </div>
      <div>
        <h2 className="text-lg font-bold capitalize">{props.skill.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}
export default SkillCard;
