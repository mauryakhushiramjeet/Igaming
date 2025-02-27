import {cardData} from "./card.js";
import StarRating from "./StarRating.jsx";

const HorizontalCards=()=>{
  return  (
        <div className="flex flex-col px-[100px] max-xl-1440:px-[50px] max-lg:px-[10px]  mt-[50px] mb-[80px]  gap-[40px]  ">
            {cardData.map((card,index)=>(
                <div key={index}>
                    {card.topImage&&(
                        <div className="  w-[30px]  bg-[#19232B]  mx-auto text-center  h-[22px] flex justify-center items-center rounded-tl-[5px] rounded-tr-[5px] ">
                            <img src={card.topImage} alt={"topImage"} className="mb-[0px] "/>
                        </div>
                    )}
                    <div className=" w-[95%]  xl-1440:w-[100%] h-[250px] grid grid-cols-4 items-center rounded-[15px] px-9 max-lg:px-[20px]  gap-[117px]  max-xl-1440:gap-[50px] max-lg:gap-[0px] mx-auto bg-[#19222B] relative ">
                        {card.cornerImage && (
                            <img
                                src={card.cornerImage}
                                alt="corner"
                                className="absolute top-[-7px] max-lg:top-[-7px] right-[-7px]  max-xl-1440:right-[-7px] max-lg:right-[-5px] z-[1] w-[78px] max-xl-1440:w-[75px] max-lg:w-[60px]   h-[75px] max-xl-1440:h-[75px]"
                            />
                        )}
                        <div className="flex justify-center items-center border border-[#42F67838]
                        bg-[#0D1218] h-[120px]  max-xl-1440:h-[100px] max-lg:h-[90px]  px-[5px]   w-[370px] max-xl-1440:w-[280px] max-lg:w-[200px]  rounded-[8px] ml-[25px]  max-xl-1440:ml-[10px] max-lg:ml-0 "  >
                            <img src={card.cardImage} alt={card.name}/>
                        </div>
                        {/*                                                                                            BONUS AREA                                              */}
                        <div className="flex  h-[100%]  items-center justify-center gap-2 max-xl-1440:gap-0 max-lg:gap-2 w-[420px] max-xl-1440:w-[320px] max-lg:w-[260px]  relative ">
                            <div className="w-[150px] h-[150px]  max-lg:w-[120px] max-lg:h-[120px] z-0 absolute rounded-full top-[40px] max-lg:top-[60px] mx-auto border  bg-[#42FA7E24] blur-[20px] "></div>
                            <div className=" w-[2px] max-lg:w-[3px] h-[50%]  max-lg:h-[35%] bg-gradient-to-t from-[#19222B] via-[#279046] to-[#19222B]"></div>
                            <div className="flex flex-col justify-center items-center z-10 ">
                                <p className=" font-dmsans text-[#42FA7E]  text-center   text-[25px] max-xl-1440:text-[18px]  max-lg:text-[15px]">
                                    {card.bonus}
                                </p>
                                <div className="mt-[15px] z-10    ">
                                    <StarRating rating={card.rating} index={index}/>
                                </div>
                            </div>
                            <div className=" w-[3px] max-lg:w-[2px] max-xl-1440:w-[2px]  h-[50%] max-lg:h-[35%] bg-gradient-to-t from-[#19222B] via-[#279046] to-[#19222B] "></div>

                        </div>
                        {/*                                                           feature area                                                              */}
                        <div className="flex flex-col justify-center items-start  ml-[50px] max-xl-1440:ml-[30px] max-lg:ml-[50px]   w-[380px] max-lg:w-[250px]  ">
                            {
                                card.features.map((feature,index)=>(
                                    <div key={index} className="flex items-center   ">
                                            <span>
                                                <img src="/images/circle.png" alt="check" className=" w-[19px] max-xl-1440:w-[15px] h-[19px] max-xl-1440:h-[15px] max-lg:w-[13px] max-lg:h-[13px] "/>
                                                  </span>
                                        <p  className="text-[white]   text-[18px] max-xl-1440:text-[15px] max-lg:text-[13px]  my-[5px] max-lg:my-[2px] font-dmsans  ml-[15px] max-xl-1440:ml-[10px] font-bold  max-xl-1440:font-semibold max-lg:font-semibold">{feature}</p>
                                    </div>
                                ))
                            }
                            <div className="flex w-full   items-start gap-5 max-lg:gap-3 font-dmsans   mt-[15px]  ">
                                {
                                    card.paymentMethods.map((paymentMethod,index)=>(
                                        <img key={index} src={paymentMethod}  alt="paymentmode" className="w-[34px] h-[24px] max-lg:w-[30px] max-lg:h-[20px] "/>
                                    ))
                                }
                            </div>
                        </div>

                            <div className="h-[100%] flex flex-row items-center max-lg:ml-[70px]  justify-center max-lg:w-[210px]   ">
                                <div className="w-[2px] h-[50%]  max-lg:h-[40%] bg-gradient-to-t  from-[#19222B] via-[#279046] to-[#19222B ]"></div>
                           <div className="flex flex-col ml-[17px]   ">
                               <button className="  rounded-[6px]  px-[40px] max-lg:px-[10px] py-[15px] max-lg:w-[150px] max-lg:py-[12px]  font-bold font-dmsans text-[#FFFFFF]  text-[17px]  max-lg:text-[14px] bg-gradient-to-t outline-none border-none
                                from-[#27944B] to-[#42FA7E]">PLAY NOW</button>
                               <p className="  text-[12px] max-lg:text-[11px] mt-[14px] r mx-auto text-[#FFFFFF] text-center pr-10 font-dmsans font-normal">
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