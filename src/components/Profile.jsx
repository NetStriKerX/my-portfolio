function Profile() {
  return (
    <div className="flex justify-center items-center px-24">
      <div className="w-1/2 py-8 pl-64 pr-4 text-left">
        <h2>Hi!</h2>
        <h2 className="font-bold text-2xl mt-4">I'm Kasawat Chumnirat.</h2>
        <h2 className="font-bold text-2xl mb-8">a Full-Stack Developer.</h2>
        <p>
          Full Stack Developer based in bangkok, Thailand. I am coding with a
          clean and beautiful problem solving in mind.
        </p>
        <div className="flex mt-6 mb-8 gap-5">
          <p className="mr-4">Follow me</p>
          <div className="flex gap-4">
            <a href="">
              <div>
                <img src="" alt="" />
              </div>
            </a>
            <a href="">
              <div>
                <img src="" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#FF2950] text-white">Download CV</button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center p-12">
        <img
          className="rounded-full"
          src="https://www.magneticferret.com/forum/uploads/monthly_2022_07/large.510367043_YorForger300x300.png.a78ed5bc2b965a23836b49a5d3701bed.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Profile;
