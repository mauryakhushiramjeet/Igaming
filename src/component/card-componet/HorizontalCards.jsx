import {cardData} from "./card.js";
import StarRating from "./StarRating.jsx";

const HorizontalCards=()=>{
  return  (
        <div className="flex flex-col px-[100px] max-lg-1200:px-[50px]  mt-[50px] mb-[80px]  gap-[40px]   ">
            {cardData.map((card,index)=>(
                <div key={index}>
                    {card.topImage&&(
                        <div className="  w-[30px]  bg-[#19232B]  mx-auto text-center  h-[22px] flex justify-center items-center rounded-tl-[5px] rounded-tr-[5px] ">
                            <img src={card.topImage} alt={"topImage"} className="mb-[0px] "/>
                        </div>
                    )}
                    <div className="  h-[250px] max-md-999:h-[222px] grid grid-cols-4  max-md-991:grid-cols-2 max-md-991:py-[40px] max-md-991:h-[332px]  max-md-991:gap-x-12 max-md-991:gap-y-6 items-center rounded-[15px] px-5 max-md-991:px-[35px]  mx-auto bg-[#19222B] relative  max-md-950:px-[15px] ">
                        {card.cornerImage && (
                            <div className="absolute overflow-hidden w-20 h-20 -right-3 -top-2">
                                <div className={`absolute top-4 -right-5 w-24 rotate-45 ${index==0?"bg-[#42FA7F] ":"bg-[#FFAA06] "} text-center text-xs leading-[15px] text-black font-bold  shadow-md before:absolute before:top-[65%]
                                before:left-[5px] ${index==0?" before:border-[10px] ":" before:border-[10px] "}   ${index==0?"before:border-t-[#42FA7F]":"before:border-t-[#FFAA06]"}  before:border-r-transparent before:border-b-transparent ${index==0?"before:border-l-[#42FA7F]":"before:border-l-[#FFAA06]"}  after:absolute
                                after:top-[65%] after:right-0 after:border-[10px] ${index==0?"after:border-t-[#42FA7F]":"after:border-t-[#FFAA06]"} ${index==0?"after:border-r-[#42FA7F]":"after:border-r-[#FFAA06]"}  after:border-b-transparent after:border-l-transparent`}
                                >
                                    {index==0?"New":"Exclusive"}
                                </div>
                            </div>
                        )}
                        <div className="flex justify-center items-center border border-[#42F67838]
                        bg-[#0D1218] py-[20px] rounded-[8px] ml-[25px] max-lg-1100:ml-[5px]  max-md-991:ml-[10px] mr-5  "  >
                            <img src={card.cardImage} alt={card.name} className="h-[80px] max-md-991:h-[66px]  max-lg-1364:h-[60px] max-md-999:h-[40px] max-lg-800:h-[60px]  lg:px-[20px] object-contain max-lg-1364:px-5 max-lg-800:px-[20px]"/>
                        </div>
                        {/*                                                                                        bonus area                                              */}
                        <div className="flex  h-[100%]  items-center justify-center    relative ">
                            <div className="w-[150px] h-[150px]  max-md-999:w-[120px] max-md-999:h-[120px]  z-0 absolute rounded-full top-[40px] max-md-991:top-[3px] max-md-999:top-[45px]  mx-auto border  bg-[#42FA7E30] blur-[30px] "></div>
                            <div className=" w-[2px] max-md-991:w-[3px]  h-[50%] max-md-991:h-[90%]  bg-gradient-to-t from-[#19222B] via-[#279046] to-[#19222B]"></div>
                            <div className="flex flex-col justify-center items-center z-10 ">
                                <p className=" font-dmsans text-[#42FA7E]  text-center   text-[20px] max-lg-1364:text-[18px] max-lg-1100:text-[15px] max-md-991:text-[20px]  px-[10px] max-md-950:px-[5px]">
                                    {card.bonus}
                                </p>
                                <div className="mt-[15px] z-10   ">
                                    <StarRating rating={card.rating} index={index}/>
                                </div>
                            </div>
                            <div className=" w-[2px]  max-md-991:hidden h-[50%] max-lg:h-[35%] bg-gradient-to-t from-[#19222B] via-[#279046] to-[#19222B] "></div>
                        </div>
                        {/*                                                           feature area                                                              */}
                        <div className="flex flex-col justify-center items-start ml-[35px] max-lg-1529:ml-[20px] max-lg-1100:ml-[10px]  ">
                            {
                                card.features.map((feature,index)=>(
                                    <div key={index} className="flex items-center   ">
                                            <span>
                                                <img src="/images/circle.png" alt="check" className=" w-[19px]  h-[19px]  max-lg-1529:w-[15px] max-lg-1529:h-[15px]"/>
                                                  </span>
                                        <p  className="text-[white]  text-[18px] my-[5px] max-lg-1150:text-[12px] font-dmsans  ml-[15px] max-md-950:ml-[5px] font-bold max-lg-1731:text-[15px]  max-md-991:text-[15px] max-md-991:py-[0px]  max-lg-1392:text-[14px] max-lg-1529:font-normal ">{feature}</p>
                                    </div>
                                ))
                            }
                            <div className="flex w-full items-start gap-5 max-lg-1392:gap-3 mt-[15px] max-lg-1100:gap-2 max-md-999:gap-[8px] max-md-991:gap-[15px] ">
                                {
                                    card.paymentMethods.map((paymentMethod,index)=>(
                                        <img key={index} src={paymentMethod}  alt="paymentmode" className="max-md-999:w-[22px] max-md-999:h-[18px] max-md-991:w-[25px] max-md-991:h-[22px]"/>
                                    ))
                                }
                            </div>
                        </div>

                            <div className="h-[100%] flex flex-row items-center justify-center max-md-991:justify-start   ">
                                <div className="w-[2px] h-[50%] max-md-991:h-[90%] bg-gradient-to-t  from-[#19222B] via-[#279046] to-[#19222B ]"></div>
                           <div className="flex flex-col ml-[25px] max-md-991:ml-[100px] max-md-950:ml-[80px] items-center  ">
                               <button className=" mt-[25px] flex text-center justify-center rounded-[6px] w-[200px] max-lg-1045:w-[150px] max-lg-800:w-[150px] max-lg-800:px-[40px]  h-[50px] items-center
                                whitespace-nowrap px-[50px] max-lg-767:px-[30px] max-xs-375:px-[30px] py-[15px] max-xs-375:py-[10px] font-bold font-dmsans text-[#FFFFFF]  bg-gradient-to-t outline-none border-none from-[#27944B] to-[#42FA7E]">PLAY NOW</button>
                               <p className="  text-[12px]  mt-[14px] r mx-auto text-[#FFFFFF] text-center font-dmsans font-normal">
                                   {card.license}
                               </p>
                           </div>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default  HorizontalCards