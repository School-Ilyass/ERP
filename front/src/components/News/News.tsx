import Message from "./Message"
import "./style.css"

import mail from "../../assets/icons/Mail.svg"
import money from "../../assets/icons/money.svg"

function News(){
    return(
        <div className="News">
            <Message
                icon={mail}
                msg="Contractor Information for Ilyass Baba"
                date="12/01/2025"
            />

            <Message
                icon={money}
                msg="Resultat de l'entreprise"
                date="2/01/2025"
            />


            <Message
                icon={money}
                msg="Fiche de paye Decembre 2024"
                date="29/12/2024"
            />
        </div>
    )
}

export default News