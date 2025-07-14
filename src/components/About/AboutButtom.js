import AboutButtomLeft from "./AboutButtomLeft"
import AboutButtomRight from "./AboutButtomRight"
export default function AboutButtom(){
    return(
        <div className="abou-Buttom w-full h-[60vh] flex =bg-green-400">
            <AboutButtomLeft />
            <AboutButtomRight />
        </div>
    )
}