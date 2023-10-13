import Card from "../../molecules/card/Card";
import 'w3-css/w3.css';
import "./cardSection.css"
function CardSection(){
    return(
        <div className="cardSectionContent">
            <h2 className="cardSTi">Eventos</h2>
            <div className="w3-row cards">
                <div className="w3-col l6 m6 card">
                    <Card 
                        category="Competencia" 
                        title="Competencia de clasificación UMSS" 
                        date="05/10/2023"
                        description="Lorem ipsum dolor sit amet consectetur. Adipiscing diam odio odio feugiat tincidunt elementum tellus. Eget facilisis purus consequat convallis nec. Ut euismod curabitur amet elementum tellus etiam lorem. Orci pharetra non suspendisse integer diam aliquet mi ac faucibus."
                        src="https://www.umss.edu.bo/wp-content/uploads/2023/03/ICPC-Bolivia-Regionals-2022-afiche.png">

                    </Card>
                </div>
                <div className="w3-col l6 m6 card">
                    <Card 
                        category="Competencia" 
                        title="Competencia de clasificación UMSS" 
                        date="05/10/2023"
                        description="Lorem ipsum dolor sit amet consectetur. Adipiscing diam odio odio feugiat tincidunt elementum tellus. Eget facilisis purus consequat convallis nec. Ut euismod curabitur amet elementum tellus etiam lorem. Orci pharetra non suspendisse integer diam aliquet mi ac faucibus."
                        src="https://www.umss.edu.bo/wp-content/uploads/2023/03/ICPC-Bolivia-Regionals-2022-afiche.png">

                    </Card>
                </div>
            </div>

        </div>
    )
}
export default CardSection;