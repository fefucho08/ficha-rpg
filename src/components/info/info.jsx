import Personal from './personal/personal';
import Foto from './Foto/foto';
import Stats from './Stats/stats';
import './info.css';

export default function Info(){
    return(
        <div className="firstContainer">
            <Personal/>
            <Foto/>
            <Stats/>
        </div>
    );
}