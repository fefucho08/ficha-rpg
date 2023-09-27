import {toast} from 'react-hot-toast'

export default function validator(test) {
    let multiplier, dice;
    let bonus = 0;

    if(test.includes("d")){
        const numbers = test.split("d");
        multiplier = parseInt(numbers[0])
        const diceAndBonus = numbers[1];

        if(diceAndBonus.includes("+")){
            const splitted = diceAndBonus.split("+");
            dice = parseInt(splitted[0]);
            bonus = parseInt(splitted[1]);
        }
        else{
            dice = (parseInt(diceAndBonus))
        }

        if(isNaN(multiplier) || isNaN(dice) || isNaN(bonus)){
            toast.error("Valores inválidos!")
            return false
        } else{
            const testInformation = {
                multiplier: multiplier,
                dice: dice,
                bonus: bonus,
            }

            return testInformation
        }
                
    }else{
        toast.error("Digite da maneira correta!")
        return false
    }
}