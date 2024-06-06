import '../components/styles/LockStyles.css';
import Lock from '../images/lock0.png';

export const HomePage: React.FC = () => {
    return (
        <div className="garageBlock">
            <h1>Garage</h1>
            <div className="garageLock">
                <img src={Lock} alt="Lock"
                    style={{ display: 'block', width: '100px' }}
                />
                <p className="garageText">
                    Please Log in. Open garage and enjoy!
                </p>
            </div>
        </div>
    );
}