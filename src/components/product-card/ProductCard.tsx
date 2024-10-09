import { IProductData } from "../../types"
import { textSlice } from "../../utils";
import { Button, Image } from "../ui"

 
interface IProductCardProps{
    product:IProductData
}
 
const ProductCard = (props: IProductCardProps) => {
    const { product } = props; 
    const { category, colors, description  , imgUrl , price , title } = product
  return (
      <div className="border p-2 rounded-md  mx-auto">
           
          <Image imageSrc={imgUrl} className="mb-3 rounded-md h-60 w-full" alt="product"/>
          <h3 className="text-xl">{title}</h3>
          <p className="py-3">{ textSlice(description , 20)} </p>
          <div className="flex items-center space-x-2">
              {
                 colors.map((color, index) =>
                  (
                      <span key={index} className={`w-5 h-5 rounded-full bg-[${color}] cursor-pointer`} />

                  )
                
                   ) }
              {/* <span className="w-5 h-5 rounded-full bg-indigo-400 cursor-pointer"/>
              <span className="w-5 h-5 rounded-full bg-red-400 cursor-pointer"/>
              <span className="w-5 h-5 rounded-full bg-green-400 cursor-pointer"/> */}
          </div>
          <div className="flex items-center justify-between my-3">
              <h4 className="text-lg">${ price}</h4>
 <Image imageSrc={category.imgUrl} className="rounded-full object-contain" alt="product" />
          </div>
          <div className="flex justify-between space-x-2">
            
              <Button className="bg-indigo-700  "  >Edit</Button>
              <Button className="bg-red-700  "  >Delete</Button>
          </div>
 
     </div>
  )
}

export default ProductCard