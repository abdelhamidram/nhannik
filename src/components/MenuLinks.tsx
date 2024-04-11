type Link = {
  text: string;
  src:  string;
};

export default function MenuLinks({text,src}:Link) {

  return (
    <a href={src} className='text-black font-medium p-3'>{text}</a>
  )
}
