import { useState } from "react"
import {Data} from "./TabsData"
import "./Tabs.scss"



export const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (id) => {
        setActiveTab(id);
    }

  return (
    <div className='tabs-container
    xl:w-[70vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] w-[70vw]
    whitespace-nowrap
    '>
        
        <ul className="list-none whitespace-nowrap
         
        flex 
        ">
            { 
                Data.map((Data,i) => 
                  
                <li key={i} className={activeTab===i?"active":""} 
                onClick={()=> handleClick(i)}
                > <div className="icon">{Data.icon}</div> <span className={activeTab===i?"active title":"inactive title"}>{Data.title} </span> 
                
                </li>
                )
            }
        </ul>

        <div className="content">
            {
                Data.map((Data,i) => 
                
                    <div className={`desc ${activeTab===i?'active':''}`} key={i}> {Data.desc} </div>

                )
            }
        </div>

    </div>
  )
}
