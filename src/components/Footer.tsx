import Contact from "./Contact";

export default function Footer() {

  return (
    <footer className='flex justify-around bg-[#262626] h-[100vh]'>
        <div className='text-5xl my-16 flex flex-col justify-start'>
          <h1 className='text-blue-600 pl-[106px]'>Rejoignez la liste d'attente</h1>
          <p className="text-white pt-8 pl-16 ml-10 mr-0">Soyez parmi les premiers à bénéficier d'un accès exclusif à notre pré-lancement de produits</p>
        </div>
        <div>
          <Contact />
        </div>
    </footer>
)
}
