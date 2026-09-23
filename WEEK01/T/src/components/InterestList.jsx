function InterestList({interests}){

    return(
        <div className="tags">

            {
                interests.map((item,index)=>(

                    <span 
                    className="tag"
                    key={index}
                    >

                    {item}

                    </span>

                ))
            }

        </div>
    )
}


export default InterestList;