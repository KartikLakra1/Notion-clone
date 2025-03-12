import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  

const Sidebar = () => {

    const menuOptions = (
        <>
            <NewDocumentButton />
        </>
    );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
<div className="md:hidden bg-white" >
<Sheet >
    <SheetTrigger>
        <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40}/>
    </SheetTrigger>
    <SheetContent side="left">
        <SheetHeader>
        <SheetTitle className="text-center">Menu</SheetTitle>
        <div className="flex flex-col items-center">
            {menuOptions}
        </div>
        
        </SheetHeader>
    </SheetContent>
    </Sheet>
</div>
    


        <div className="hidden md:inline">
            {menuOptions}
        </div>
        
    </div>
  )
}

export default Sidebar