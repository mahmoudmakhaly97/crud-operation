import {  ButtonHTMLAttributes, ReactNode } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; 
  className: string; 
  width?:"w-full" |"w-fit"
 
 }
const Button = (props: IButtonProps) => {
    const {children ,className  , width , ...rest  } = props
  return (
    <button className={`flex-1  rounded-md text-white py-2 ${className} ${width}`} {...rest}>{ children}</button>
  )
}

export default Button