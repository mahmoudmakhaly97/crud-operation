interface IImageProps{
    imageSrc: string; 
    alt: string; 
    className:string
}
const Image = (props: IImageProps) => {
    const {imageSrc , alt , className} = props
  return (
     <img src={imageSrc} className={className} alt={alt}/>
  )
}

export default Image