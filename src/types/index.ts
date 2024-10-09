export interface IProductData {
 
    id: string | undefined ;
    title: string;
    description: string;
    imgUrl: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        imgUrl: string;
 
    }
}
export interface formFieldsType  {
    id:string, 
    name:string
    label: string
    type:string
  } 