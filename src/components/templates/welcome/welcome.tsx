import {Header} from "../../organisms/Header/Header.tsx";
import {NameSection} from "../../organisms/NameSection/NameSection.tsx";
import {ContactSquare} from "../../organisms/ContactSquare/ContactSquare.tsx";
import './welcome.css'

export const WelcomeTemplate = () => {

    return(
        <div id="about" className="welcome-template">
            <Header/>
            <div className="welcome-content">
                <NameSection/>
                <ContactSquare/>
            </div>
            <hr className="welcome-divider"/>
        </div>
    )
}
