import FloatImages from "@/components/hero/floatImages"
import FooterCard from "./FooterCard";
import Image from "next/image";

export default function footer(){
    return(
        <>
        <section className="relative bg-custom-gradient min-h-screen text-white">
        <FloatImages/>
  
        <div className="p-8 z-50 relative">
            <FooterCard/>
                 
        </div>


        </section>
       
        </>
    )
}