import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
export default function Menub() {
  return (
    <>
        <Menubar className='border-none'>
          <MenubarMenu >
            <MenubarTrigger className='text-blue-600 font-bold '>EN</MenubarTrigger>
            <MenubarContent className='text-blue-600 font-bold' >
              <MenubarItem>AR</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>FR</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
    </>
  )
}
