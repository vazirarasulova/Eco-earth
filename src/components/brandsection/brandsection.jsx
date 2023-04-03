import { Brands } from "../brands/brands"
import ModernHome from "../../assets/images/01.svg"
import VS from "../../assets/images/02.svg"
import Brand from "../../assets/images/03.svg"
import NatureHome from "../../assets/images/04.svg"
import Classic from "../../assets/images/05.svg"

export const BrandSection = () =>{
  return(
    <section className="mb-52 ps-40 pe-40">
      <ul className="flex justify-between items-center">
        <Brands img={ModernHome} title={"Modern home"}/>
        <Brands img={VS} title={"VS"}/>
        <Brands img={Brand} title={"Brand"}/>
        <Brands img={NatureHome} title={"NatureHome"}/>
        <Brands img={Classic} title={"Classic design studio"}/>
      </ul>
    </section>
  )
}