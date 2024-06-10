import Chevrolet from '../images/camaro.jpg';
import Ford from '../images/ford.jpg';
import Bmw from '../images/bmw.jpg';
import Porshe from '../images/porshe.jpg';
import Dodge from '../images/dodge.jpg';
import Mers from '../images/mercedes.jpg';
import Audi from '../images/audi.jpg';
import Lamba from '../images/Lamba.jpg';
import Luaz from '../images/Luaz.jpg';
import Zapor from '../images/zapor2.jpg';

import './styles/Garage.css';

export const Garage = () => {
    return (
        <>
            <h1>Now You can choose any car what You like
            </h1>
            <div className="carsSection">
                <img className="carsImg" src={Chevrolet} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Chevrolet Camaro, 2024
                    </h2>
                    <span className="carPrice">
                        Price: 260$ / day
                    </span>
                </div>

                <img className="carsImg" src={Ford} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Ford Mustang, 2023
                    </h2>
                    <span className="carPrice">
                        Price: 230$ / day
                    </span>
                </div>

                <img className="carsImg" src={Bmw} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        BMW I8, 2024
                    </h2>
                    <span className="carPrice">
                        Price: 285$ / day
                    </span>
                </div>

                <img className="carsImg" src={Porshe} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Porshe Panamero, 2022
                    </h2>
                    <span className="carPrice">
                        Price: 210$ / day
                    </span>
                </div>

                <img className="carsImg" src={Dodge} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Dodge Chalendger, 2023
                    </h2>
                    <span className="carPrice">
                        Price: 290$ / day
                    </span>
                </div>

                <img className="carsImg" src={Mers} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Mercedes-Benz AMG GT R, 2024
                    </h2>
                    <span className="carPrice">
                        Price: 330$ / day
                    </span>
                </div>

                <img className="carsImg" src={Audi} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Audi RS7-R, 2024
                    </h2>
                    <span className="carPrice">
                        Price: 300$ / day
                    </span>
                </div>

                <img className="carsImg" src={Lamba} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Lamborghini Urus, 2024
                    </h2>
                    <span className="carPrice">
                        Price: 270$ / day
                    </span>
                </div>

                <img className="carsImg" src={Luaz} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Luaz, 2008
                    </h2>
                    <span className="carPrice">
                        Price: 330$ / day
                    </span>
                </div>

                <img className="carsImg" src={Zapor} alt="car" />
                <div className="carInfo">
                    <h2 className="carTitle">
                        Zapor Gorbatyi, 1980
                    </h2>
                    <span className="carPrice">
                        Price: 350$ / day
                    </span>
                </div>

            </div>
        </>
    )
}