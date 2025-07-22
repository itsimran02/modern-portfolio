type Skill = string;

type SkillCardsProps = {
  skillData: Skill[];
};
const SkillCards = ({ skillData }: SkillCardsProps) => {
  return (
    <div>
      {skillData.length < 1 && <div>add skills data</div>}
      <div className="flex flex-col gap-3">
        {skillData.map((skill) => {
          return (
            <div
              key={skill}
              className="bg-[#10132E] rounded-[7px] py-[25px] px-[45px]"
            >
              <p className="capitalize font-inter text-sm font-semibold">
                {skill}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCards;
