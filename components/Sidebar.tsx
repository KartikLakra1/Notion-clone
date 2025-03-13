"use client";

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
  import {useCollection} from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "@/firebase";
  
  

const Sidebar = () => {
    const {user} = useUser();
    const [data , loading,error] = useCollection(
        user && (
            query(collectionGroup(db,'rooms'),where("userId", "==" , user.emailAddresses[0].toString()))
        )
    )

    const menuOptions = (
        <>
            <NewDocumentButton />

            {/* MY Documents */}
            {/* List */}
            {/* Shared with me */}
            {/* List ... */}
        </>
    );

  return (
    <div className="p-2 md:p-5 relative">
<div className="md:hidden bg-white " >
<Sheet >
    <SheetTrigger>
        <MenuIcon className=" p-2 hover:opacity-30 rounded-lg" size={40}/>
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