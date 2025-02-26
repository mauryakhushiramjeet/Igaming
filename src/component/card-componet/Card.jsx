import {cardData} from './card.js';
import StarRating from "./StarRating.jsx";
const Card=()=>{
    return(
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 justify-center items-center   place-items-center xl-1440:grid-cols-3 max-xl-1440:px-[44px]
        px-[60px]   md:px-[70px] 2xl:px-[200px] xl:px-[50px] mx-auto mt-[12px] md:mb-[120px] max-sm-425:mb-[70px]   ">
                {
                    cardData.map((card,index)=>(
                        <div key={index} className="mt-[40px]  ">
                            {card.topImage&&(
                                <div className=" sm:w-[43px] w-[30px]  bg-[#19232B] mx-auto text-center  sm:h-[24px] h-[22px] flex justify-center items-center rounded-tl-[5px] rounded-tr-[5px]">
                                <img src={card.topImage} alt={"topImage"} className="mb-[0px] "/>
                            </div>
                            )}
                            <div  className="sm:w-[391px]  max-xs-375:w-[330px] max-sm-425:w-[300px] z-[1] max-xxs-320:w-[270px]
                             bg-[#19222B] flex flex-col justify-center items-center rounded-[15px] mx-4  md:mx-[52px] relative ">

                                {/*corner Image*/}
                                {card.cornerImage && (
                                    <img
                                        src={card.cornerImage}
                                        alt="corner"
                                        className="absolute sm:top-[-10px] xs-375:top-[-8px] max-xxs-320:top-[-6px] sm:right-[-10px] xs-375:right-[-8px] z-[1]  sm:w-[78px]  max-xxs-320:right-[-6px] xs-375:w-[68px] max-xxs-320:w-[58] sm:h-[77px] h-[65px]"
                                    />
                                )}
                                <div className="w-[180px] h-[180px] max-sm-425:w-[150px] max-sm-425:h-[150px] z-0 absolute rounded-full top-[70px]  bg-[#42FA7E24] blur-[20px] "></div>
                                <div  className="sm:w-[327px] z-[1] max-xxs-320:w-[200px] sm:h-[98px] xs-375:h-[80px] max-sm-425:h-[70px] border-[1px] border-[#42F67838] bg-[#0D1218] items-center flex justify-center sm:mt-[32px] mt-[25px] rounded-[8px]">
                                    <img src={card.cardImage}  alt={card.name} className="max-sm-425:px-[15px]" />
                                </div>
                                <p className="sm:w-[365px] xs-375:w-[260px] max-xxs-320:w-[230px] xs-375:h-[58px] z-[1] max-xxs-320:h-[48px] sm:text-[22px] xs-375:text-[17px] max-xxs-320:text-[15px] font-dmsans text-[#42FA7E] xs-375:mt-[26px] max-xxs-320:mt-[23px] text-center">
                                    {card.bonus}
                                </p>
                                <div className="w-[203px] h-[29px] z-[1]  sm:mt-[20px] xs-375:mt-[6px] max-xxs-320:mt-[3px] flex justify-center items-center ">
                                    <StarRating rating={card.rating}/>
                                </div>
                                <div className="sm:w-[305px]w-[250px] max-xxs-320:w-[240px] max-xxs-320:px-[7px]  sm:mt-[29px] mt-[15px] flex flex-col    ">
                                    {
                                        card.features.map((feature,index)=>(
                                            <div key={index} className="flex items-center  ">
                                            <span>
                                                <img src="/images/circle.png" alt="check" className="sm:w-[17px] w-[12px] sm:h-[17px] h-[12px]"/>
                                                  </span>
                                                <p  className="text-[white] sm:text-[15px] xs-375:text-[13px] max-xxs-320:text-[12px] my-[5px] font-dmsans  sm:ml-[10px] ml-[5px]">{feature}</p>
                                            </div>

                                        ))
                                    }
                                </div>
                                <div className="flex w-[228px]   items-center gap-4   sm:justify-between justify-center  sm:mt-[34px] xs-375:mt-[20px] max-xxs-320:mt-[12px] ">
                                    {
                                        card.paymentMethods.map((paymentMethod,index)=>(
                                            <img key={index} src={paymentMethod}  alt={paymentMethod} className="w-[34px] h-[24px] "/>
                                        ))
                                    }
                                </div>
                                <button className="sm:mt-[32px] xs-375:mt-[25px] max-xxs-320:mt-[18px]  rounded-[6px] sm:px-[41px] px-[25px]  sm:h-[47px] h-[39px] mx-auto  font-bold font-dmsans text-[#FFFFFF] sm:text-[18px] text-[14px] bg-gradient-to-t outline-none border-none
                                from-[#27944B] to-[#42FA7E]">PLAY NOW</button>
                                <p className=" sm:text-[12px] text-[11px] mt-[14px] sm:mb-[26px] mb-[15px] mx-auto text-[#FFFFFF] text-center font-dmsans font-normal">
                                    {card.license}
                                </p>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}
export default Card;