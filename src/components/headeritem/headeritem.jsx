import HomeList from "../homelist/homelist";

export const HeaderItem = () => {
  return (
    <section>
      <ul className='flex items-center justify-center list-none'>
        <HomeList
          title={"Project Plan"}
          text={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          link={"/about"}
        />
        <HomeList
          title={"Interior Work"}
          text={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          link={"/services"}
        />
        <HomeList
          title={"Realization"}
          text={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          link={"/product"}
        />
      </ul>
    </section>
  );
};
