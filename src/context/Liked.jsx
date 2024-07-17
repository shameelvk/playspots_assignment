import { createContext, useEffect, useState } from "react";

export const likeContext = createContext();

const LikeContextWrap = ({ children }) => {


    const [likedData, setLikeData] = useState([]);
    useEffect(() => {



    }, [])

    const handleDelete=()=>{
        const datalenth=likedData.length;
        likedData[datalenth-1];
        let dummy=[];
        for(let i=0;i<datalenth;i++){
            if(i!=datalenth-1){
                dummy.push(likedData[i]);
            }
        }
        setLikeData(dummy);


    }

    const addToLike = (item) => {
        itemExist = likedData.findIndex((like) => like.id === item.id);

        if (itemExist === -1) {
            let newLikeData = [...likedData, item]
            setLikeData(newLikeData);
        }else{
            let filteredData=likedData.filter((like) => like.id != item.id);
            setLikeData(filteredData);
        }


    }

    let value = {
        likedData,
        setLikeData,
        addToLike,handleDelete


    }


    return (
        <likeContext.Provider value={value}>
            {children}
        </likeContext.Provider>
    )
}





export default LikeContextWrap;