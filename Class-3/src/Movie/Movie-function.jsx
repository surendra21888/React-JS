let Movie = ()=>{
    let movie_Name="Guntur kaaram"
    let actor="Mahesh babu";
    let movie_Image='https://www.cinejosh.com/newsimg/newsmainimg/target-share-of-guntur-kaaram-to-attain-hit-status_b_0901240257.jpg'
    
        return <div>
                <h3>Movie Component</h3>
                <h4>Movie Name:{movie_Name}</h4>
                <h4>Hero Name:{actor}</h4>
                <img src={movie_Image}/>
              </div>
    }
    export default Movie;