import { Link } from "react-router-dom";

const BrandCard = ({ company }) => {
    const { companyName, companyLogo } = company || {};

    return (
        <Link to={`/company/${companyName}`}>
            <div className="">
                <div className="card border md:h-[100%] lg:h-[150px] hover:bg-[#eee]">
                    <figure><img className="w-[40%] md:w-[40%] lg:w-[60%]" src={companyLogo} alt="logo" /></figure>
                    <div className="ml-36 md:ml-20 lg:ml-16 mt-4">
                        <h2 className="card-title">{companyName}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;