export const Brands = ({img , title}) =>{
  return(
    <>
      <li className="list-none">
        <img src={img} alt={title} />
      </li>
    </>
  )
}