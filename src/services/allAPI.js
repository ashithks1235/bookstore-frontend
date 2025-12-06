// register - Auth component

import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

export const registerAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}