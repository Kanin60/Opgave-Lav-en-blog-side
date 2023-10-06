import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import style from "./Footer.module.scss";

export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div>
                <p>Lavet af ©Kamilla 2023. Alle rettigheder forbeholdes.<br />Kontakt os: <a href="#">kvinderifølgechat@info.dk</a></p>
                <p>Støt os: Hvis du ønsker at støtte vores arbejde for at fremhæve kvinders historie, kan du finde ud af, hvordan du kan bidrage <a href="#">her</a>.</p>
                <p>Partner med os: Er du interesseret i at samarbejde med os? <a href="#">Lær mere</a> om vores partnermuligheder.</p>
            </div>
            <figure>
                <AiFillInstagram />
                <AiFillFacebook />
                <AiFillTwitterSquare />
                <FaPinterestSquare />
                <AiFillYoutube />
                <AiFillLinkedin />
            </figure>
        </footer>
    )
}