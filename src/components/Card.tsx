import Image from "next/image";
type CardProps  = {
    img: {
      src : string,
      width: number,
      height?:number,
    } ;
    title: string;
    text: string;
    description: string;
    className: string;
  };
export default function Card({img,title,text,description,className}:CardProps ) {
  return (
      <div  className={className}>
          <div >
              <Image
                  src={img.src}
                  alt=""
                  width={img.width}
                  height={img.height}
              />
          </div>
          <div className="p-4 mt-10 ">
              <h1 className="text-blue-600 text-xl font-bold mb-2 max-w-[580px]">{title}</h1>
              <p className="text-xl mb-2">{text}</p>
              <p>{description}</p>
          </div>
      </div>
  )
}