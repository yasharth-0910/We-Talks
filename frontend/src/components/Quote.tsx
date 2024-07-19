import { TypeAnimation } from 'react-type-animation';

export const Quote = () => {
    return (
      <div className="bg-slate-200 h-screen flex justify-center flex-col ">
        <div className="flex justify-center">
            <div className="max-w-lg ">
                <div className=" text-2xl font-semibold overflow-hidden whitespace-nowrap border-r-2 border-black animate-typewriter">
                    
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        "‘Hey, how you doin’?'",
                        1000
                    ]}
                    speed={80}
                    style={{ fontSize: '2xl' }}
                    repeat={Infinity}
                />
                </div> 
                <div className="max-w-md text-2xl font-light mt-4 opacity-0 animate-fadeIn delay-[5s] ">
                    Joey Tribbiani
                </div>
                <div className="max-w-md text-xl font-thin mt-2 opacity-0 animate-fadeIn delay-[5.5s] text-slate-400 ">
                    Actor, cast member of Friends
                </div> 
            </div> 
        </div>  
      </div>
    )
}



// import { TypeAnimation } from 'react-type-animation';

// export const Quote = () => {
//     return (
//       <div className="bg-slate-200 h-screen flex justify-center flex-col ">
//         <div className="flex justify-center">
//             <div className="max-w-lg ">
//                 <div className=" text-2xl font-semibold overflow-hidden whitespace-nowrap border-r-2 border-black animate-typewriter">
                    
//                 <TypeAnimation
//                     sequence={[
//                         // Same substring at the start will only be typed once, initially
//                         "Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.",
//                         1000
//                     ]}
//                     speed={50}
//                     style={{ fontSize: '2xl' }}
//                     repeat={Infinity}
//                 />
//                 </div> 
//                 <div className="max-w-md text-2xl font-light mt-4 opacity-0 animate-fadeIn delay-[5s] ">
//                     Grace Hopper
//                 </div>
//                 <div className="max-w-md text-xl font-thin mt-2 opacity-0 animate-fadeIn delay-[5.5s] text-slate-400 ">
//                     Computer scientist, and military admiral
//                 </div> 
//             </div> 
//         </div>  
//       </div>
//     )
// }
  
  

//Better version

// import { TypeAnimation } from 'react-type-animation';

// export const Quote = () => {
//     return (
//         <div className="bg-slate-200 h-screen flex justify-center flex-col">
//             <div className="flex justify-center">
//                 <div className="max-w-lg">
//                     <div className="text-2xl font-semibold overflow-hidden border-r-2 border-black animate-typewriter">
//                         <TypeAnimation
//                             sequence={[
//                                 "Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.",
//                                 1000
//                             ]}
//                             speed={50}
//                             style={{ fontSize: '2xl' }}
//                             repeat={Infinity}
//                         />
//                     </div>
//                     <div className="max-w-md text-2xl font-light mt-4 opacity-0 animate-fadeIn delay-[5s]">
//                         Grace Hopper
//                     </div>
//                     <div className="max-w-md text-xl font-thin mt-2 opacity-0 animate-fadeIn delay-[5.5s] text-slate-400">
//                         Computer scientist, and military admiral
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }