import Chevrolet from '../images/chevrolet.jpg';
import Ford from '../images/ford.jpg';
import './styles/Garage.css';

export const Garage = () => {
    return (
        <>
            <h1>Now You can choose any car what You like</h1>
            <div className="carsSection">
                <img className="carsImg" src={Chevrolet} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Chevrolet Camaro 2024
                    </h2>
                    <span className="carPrice">
                        Price: 260$ / day
                    </span>
                </div>

                <img className="carsImg" src={Ford} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Ford Mustang 2023
                    </h2>
                    <span className="carPrice">
                        Price: 210$ / day
                    </span>
                </div>
            </div>
        </>
    )
}