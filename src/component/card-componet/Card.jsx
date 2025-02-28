import {cardData} from './card.js';
import StarRating from "./StarRating.jsx";
const Card=()=>{
    return(
        <div className="grid  md:grid-cols-2   lg:grid-cols-3  grid-cols-1 justify-center items-center   place-items-center
        mx-[100px] mt-[12px]  md:mb-[120px] mb-20  max-lg-1400:gap-8 max-lg-1529:gap-12 max-lg-1364:gap-x-20 max-lg-1392:gap-x-28  max-lg-1180:gap-x-[190px] md:gap-x-6">
                {
                    cardData.map((card,index)=>(
                        <div key={index} className="mt-[40px]   ">
                            {card.topImage&&(
                                <div className="  w-[30px]  bg-[#19232B] mx-auto text-center  h-[22px] flex justify-center items-center rounded-tl-[5px] rounded-tr-[5px]">
                                <img src={card.topImage} alt={"topImage"} className="mb-[0px] "/>
                            </div>
                            )}
                            <div  className="  z-[1]  bg-[#19222B] flex flex-col justify-center items-center rounded-[15px]   max-sm-425:w-[300px] max-xs-375:w-[272px]   relative ">

                                {/*corner Image*/}
                                {card.cornerImage && (
                                    <img
                                        src={card.cornerImage}
                                        alt="corner"
                                        className="absolute  top-[-7px] right-[-7px] z-[1] w-[68px] max-sm-425:w-[58px] max-sm-425:right-[-5px] max-sm-425:top-[-5px]  "
                                    />
                                )}
                                <div className="w-[170px] h-[150px] ] z-0 absolute rounded-full top-[70px]  bg-[#42FA7E24] blur-[30px]  "></div>
                                <div  className=" z-[1]  border-[1px] border-[#42F67838] bg-[#0D1218] items-center  flex justify-center max-lg-800:mx-[60px] mx-[70px] max-lg-767:mx-[80px] max-sm-528:mx-[60px]  max-lg-1024:px-5  mt-[25px] rounded-[8px]">
                                    <img src={card.cardImage}  alt={card.name}  className="object-contain w-[240px] max-lg-800:w-[180px] max-lg-1392:max-w-none max-lg-767:w-[240px]max-lg-1364:w-[200px] max-lg-1180:w-[174px]  max-sm-425:w-[200px] max-xs-375:w-[180px] mmax-lg-1024:w-[240px]  max-sm-425:max-w-none  max-sm-425:px-[15px] h-[80px] max-xs-375:h-[70px]  px-[20px]   py-[10px]"/>
                                </div>
                                <p className=" z-[1] text-[18px] max-lg-800:text-[15px] max-lg-767:text-[20px] max-sm-425:text-[18px]  max-xs-375:text-[15px] max-xxs-320:text-[15px] max-lg-767:w-[300px] max-sm-425:w-[250px] max-xs-375:w-[200px]  w-[280px] font-dmsans text-[#42FA7E] mt-[26px] justify-center   text-center">
                                    {card.bonus}
                                </p>
                                <div className="z-[1] mt-3 ">
                                    <StarRating rating={card.rating} index={index}/>
                                </div>
                                <div className=" mt-[20px] max-xs-375:mt-[15px] flex flex-col    ">
                                    {
                                        card.features.map((feature,index)=>(
                                            <div key={index} className="flex items-center  ">
                                            <span>
                                                <img src="/images/circle.png" alt="check" className=" w-[17px]  h-[17px] max-xs-375:w-[13px] max-xs-375:h-[13px]"/>
                                                  </span>
                                                <p  className="text-[white] text-[15px] max-sm-425:text-[13px] max-xs-375:text-[10.9px] my-[5px] max-sm-425:my-[3px] font-dmsans max-lg-1100:py-[0px]  ml-[5px]">{feature}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="flex    gap-4 items-center  justify-center  mt-[20px] max-sm-425:gap-2  ">
                                    {
                                        card.paymentMethods.map((paymentMethod,index)=>(
                                            <img key={index} src={paymentMethod}  alt="paymentMode" className="w-[30px] max-xs-375:w-[23px] h-[20px] max-xs-375:h-[18px]" />
                                        ))
                                    }
                                </div>
                                <button className="mt-[25px] flex text-center justify-center  rounded-[6px]  px-[50px] max-sm-425:px-[40px] max-xs-375:px-[30px]  py-[20px] max-sm-425:py-[15px] max-xs-375:py-[10px] font-bold font-dmsans text-[#FFFFFF]  bg-gradient-to-t outline-none border-none
                                from-[#27944B] to-[#42FA7E]">PLAY NOW</button>
                                <p className="text-[12px] max-xs-375:text-[10px] mt-[14px] mb-[26px]  text-[#FFFFFF] text-center font-dmsans font-normal">
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