import { useState } from "react"
import {Data} from "./TabsData"
import "./Tabs.scss"



export const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (id) => {
        setActiveTab(id);
    }

  return (
    <div className='tabs-container'>
        
        <ul className="list-none">
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
