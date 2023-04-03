import { ReviewList } from "../reviewlist/reviewlist";
import FirstImg from "../../assets/images/natasha.jpg";
import SecoundImg from "../../assets/images/maria.jpg";
import ThereImg from "../../assets/images/jorj.jpg";

export const HomeReview = () => {
  return (
    <section className='bg-stone-200 rounded-3xl ms-40 me-40 mb-40 ps-6 pe-6 pb-24'>
      <div className='w-1/2  mt-0 mb-0 ms-auto me-auto block'>
        <h3 className='font-normal text-center text-5xl mb-8  pt-20'>
          What the People Thinks About Us
        </h3>
      </div>
      <ul className="flex items-center">
        <ReviewList
          img={FirstImg}
          alt={"Nattasha Mith"}
          title={"Nattasha Mith"}
          address={"Berlin, Germany"}
          text={
            "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
          }
        />
        <ReviewList
          img={SecoundImg}
          Raymond Galario

          alt={"Raymond Galario"}
          title={"Raymond Galario"}
          address={"Sydney, Australia"}
          text={
            "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
          }
        />
        <ReviewList
          img={ThereImg}
          alt={"Benny Roll"}
          title={"Benny Roll"}
          address={"New York, USA"}
          text={
            "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
          }
        />
      </ul>
    </section>
  );
};
