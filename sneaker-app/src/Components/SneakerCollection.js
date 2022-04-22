import Sneaker from "./Sneaker"

function SneakerCollection({collection}) {

  const renderCollection = () => {
    return collection.map(sneak => {
      return <Sneaker key={sneak.id} sneaker={sneak} />
    })
  }

  return (
    <div className="SneakerCollection">
      <ul>
        {renderCollection()}
      </ul>
    </div>
  )
}

export default SneakerCollection;
