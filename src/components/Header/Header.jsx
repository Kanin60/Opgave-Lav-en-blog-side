import hero from "../../assets/hero.png"
import style from "./Header.module.scss";

export const Header = () => {

    return (
        <header className={style.header}>
            {/* <img src={hero} alt="Digital kunst af kvinder" /> */}
            <h1>Tidens Kvinder ifølge ChatGPT</h1>
        </header>
    )
}