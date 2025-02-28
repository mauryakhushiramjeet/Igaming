import {cardData} from "./card.js";
import StarRating from "./StarRating.jsx";

const HorizontalCards=()=>{
  return  (
        <div className="flex flex-col px-[100px] max-lg-1200:px-[50px]  mt-[50px] mb-[80px]  gap-[40px]  ">
            {cardData.map((card,index)=>(
                <div key={index}>
                    {card.topImage&&(
                        <div className="  w-[30px]  bg-[#19232B]  mx-auto text-center  h-[22px] flex justify-center items-center rounded-tl-[5px] rounded-tr-[5px] ">
                            <img src={card.topImage} alt={"topImage"} className="mb-[0px] "/>
                        </div>
                    )}
                    <div className="    h-[250px] grid grid-cols-4 items-center rounded-[15px] px-5  mx-auto bg-[#19222B] relative ">
                        {card.cornerImage && (
                            <img
                                src={card.cornerImage}
                                alt="corner"
                                className="absolute top-[-7px] max-lg:top-[-7px] right-[-7px]   z-[1] w-[78px]   h-[75px] "
                            />
                        )}
                        <div className="flex justify-center items-center border border-[#42F67838]
                        bg-[#0D1218] py-[20px]  px-[5px]      rounded-[8px] ml-[25px] max-lg-1100:ml-[5px] mr-5  "  >
                            <img src={card.cardImage} alt={card.name}/>
                        </div>
                        {/*                                                                                         BONUS AREA                                              */}
                        <div className="flex  h-[100%]  items-center justify-center   relative ">
                            <div className="w-[150px] h-[150px]    z-0 absolute rounded-full top-[40px] max-lg:top-[60px] mx-auto border  bg-[#42FA7E30] blur-[30px] "></div>
                            <div className=" w-[2px]  h-[50%]  bg-gradient-to-t from-[#19222B] via-[#279046] to-[#19222B]"></div>
                            <div className="flex flex-col justify-center items-center z-10 ">
                                <p className=" font-dmsans text-[#42FA7E]  text-center   text-[20px] max-lg-1364:text-[18px] max-lg-1100:text-[15px] px-[10px]">
                                    {card.bonus}
                                </p>
                                <div className="mt-[15px] z-10    ">
                                    <StarRating rating={card.rating} index={index}/>
                                </div>
                            </div>
                            <div className=" w-[2px]   h-[50%] max-lg:h-[35%] bg-gradient-to-t from-[#19222B] via-[#279046] to-[#19222B] "></div>

                        </div>
                        {/*                                                           feature area                                                              */}
                        <div className="flex flex-col justify-center items-start ml-[35px] max-lg-1529:ml-[20px] max-lg-1100:ml-[10px] ">
                            {
                                card.features.map((feature,index)=>(
                                    <div key={index} className="flex items-center   ">
                                            <span>
                                                <img src="/images/circle.png" alt="check" className=" w-[19px]  h-[19px]  max-lg-1529:w-[15px] max-lg-1529:h-[15px]"/>
                                                  </span>
                                        <p  className="text-[white]  text-[18px] my-[5px]  font-dmsans  ml-[15px]  font-bold max-lg-1731:text-[15px] max-lg-1392:text-[12px] max-lg-1529: ">{feature}</p>
                                    </div>
                                ))
                            }
                            <div className="flex w-full items-start gap-5 max-lg-1392:gap-3 mt-[15px] max-lg-1100:gap-2 ">
                                {
                                    card.paymentMethods.map((paymentMethod,index)=>(
                                        <img key={index} src={paymentMethod}  alt="paymentmode"/>
                                    ))
                                }
                            </div>
                        </div>

                            <div className="h-[100%] flex flex-row items-center justify-center    ">
                                <div className="w-[2px] h-[50%] bg-gradient-to-t  from-[#19222B] via-[#279046] to-[#19222B ]"></div>
                           <div className="flex flex-col ml-[25px]   ">
                               <button className="  rounded-[6px]  px-[60px] max-lg-1392:px-[50px] py-[15px] font-bold font-dmsans text-[#FFFFFF]  text-[17px] bg-gradient-to-t outline-none border-none
                                from-[#27944B] to-[#42FA7E]">PLAY NOW</button>
                               <p className="  text-[12px] mt-[14px] r mx-auto text-[#FFFFFF] text-center font-dmsans font-normal">
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