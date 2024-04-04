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
    style: string;
  };
export default function Card({img,title,text,description,style}:CardProps ) {
  return (
      <div  className={style}>
          <div >
              <Image
                  src={img.src}
                  alt=""
                  width={img.width}
                  height={img.height}
              />
          </div>
          <div className="p-4 mt-10 max-w-[550px]">
              <h1 className="text-blue-600 text-xl font-bold mb-2">{title}</h1>
              <p className="text-xl mb-2">{text}</p>
              <p>{description}</p>
          </div>
      </div>
  )
}