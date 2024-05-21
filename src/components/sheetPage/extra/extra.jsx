import CustomDices from "./customDices/customDices";
import CharacterDescription from "./characterDescription/characterDescription";

export default function Extra() {
    return (
        <div className="maxContainer">
            <CustomDices />
            <CharacterDescription />
        </div>
    );
}
