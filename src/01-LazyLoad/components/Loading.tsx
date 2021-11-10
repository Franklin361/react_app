

export const Loading = () => {
    return (
        <div className="container_loading">
            <div className="sk-chase">
                {
                    [...Array(5)].map( (_,i ) => (
                        <div className="sk-chase-dot" key={i}/>
                    ))
                }
            </div>
        </div>
    )
}
