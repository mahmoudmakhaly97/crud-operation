import React, { InputHTMLAttributes } from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
const Input = (props: IInputProps) => {
    const {...rest} = props
  return (
   <input {...rest}  className="border-2 p-2 border-gray rounded-md"/> 
  )
}

export default Input