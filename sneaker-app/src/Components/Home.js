import VideoPlayBack from "./videoplayback.mp4"
import Sneaker from "./Sneaker"

function Home({mostPopular}) {
  const renderMostPopular = () => {
    return mostPopular.map(sneak => {
      return <Sneaker className='popular' key={sneak.id} sneaker={sneak} />
    })
  }

  return (
    <div className="Home">
      <br></br>
      <br></br>
      <h1 style={{color: 'red', textAlign: 'center'}}>Most Popular:</h1>
      {renderMostPopular()}
      <br></br>
      <video 
      className="video"
      autoPlay
      loop 
      muted
      style={{
        // position: "absolute",
        width:"100%",
        // left: "50%" ,
        top:"17%" ,
        height:"100%",
        // objectFit:"cover",
        // transform: "translate(-50%,-50%)",
        // zIdex:'-1',
        padding:"30px"
        
        
      }}>
        <source src={VideoPlayBack} type="video/mp4">

        </source>
      </video>
    </div>
  );
}

export default Home;