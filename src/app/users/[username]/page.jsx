"use client";

import { useParams } from "next/navigation";

const getUserData = async (username)=>{
    const url = 'https://linkedin-data-scraper.p.rapidapi.com/person_deep';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'b6a833b38dmsh59568ba84b92151p16851bjsnb0044221bc34',
            'x-rapidapi-host': 'linkedin-data-scraper.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: {
            link: `http://www.linkedin.com/in/${username}`
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
    return null
}

export default function ProfileHeader(){
    const { username } = useParams();

    console.log(username)
    const user = {}

    return(
        <div className="content">

            <div className="card_container">

                <div className={"profile_header"}>
                    <div className={"profile_cover"}>
                        <img src={user?.backgroundPicture} alt="" />
                    </div>
                    
                    <div className={"profile_bottom-part"}>
                        <div className={"profile_photo"}>
                            {/* <img src={user?.profilePicture?.profilePictureLink} alt="a" /> */}
                            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a" />
                        </div>
                        <div className={"profile_info"}>
                            <div className={"profile-name"}>
                                <span>{user?.fullName}aaaa</span>
                            </div>
                            <div className={"profile-center"}>aaaa{user?.headline}</div>

                            <div className={"profile-location"}>
                                <span>aaa{user?.addressWithCountry}</span>
                            </div>
                            
                            <div className={"profile-bottom"}>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}