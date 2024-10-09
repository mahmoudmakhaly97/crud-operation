import { useState } from "react"
import { Button, Modal, ProductCard } from "./components"
import { formFields, ProductsData } from "./data"
import { IProductData } from "./types"
import { Input } from "./components/ui"

 
const App = () => {
const [isOpen , setIsOpen] = useState(false)
  return (
    <div className="container">
   
      <div className="text-right">
                      <Button className="bg-indigo-600   px-3 my-3 ms-auto inline-block" onClick={()=>setIsOpen(true)} >Build Now</Button> 

</div>
 
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} title="Add Product">
        {formFields.map((field) => {
          return (
            <div key={field.id} className="flex flex-col mb-3">
              <label htmlFor={field.id} className="mb-2">{ field.label}</label>
              <Input type={field.type} name={field.name} id={field.id} />
            </div>
          )
        })}
        <div className="flex items-center gap-2">
          
              <Button className="bg-indigo-600" >Submit</Button> 
              <Button className="bg-gray-600" onClick={()=>setIsOpen(false)}>Cancel</Button> 
      </div>
      </Modal> 
          <div className="m-4 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        ProductsData.map((product: IProductData) => (
          <ProductCard product={ product} key={product.id} />
        ))
      }
      
 
  
      </div>
      
</div>
  )
}

export default App