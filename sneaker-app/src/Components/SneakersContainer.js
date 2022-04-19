import Sneaker from './Sneaker'

function SneakerContainer({ sneakers }) {
  const RenderSneakers = () => {
    return sneakers.map(sneak => {
      return <Sneaker key={sneak.id} sneaker={sneak} />
    })
  }
  return (
    <div>
      <ul className="SneakerCollection">
        {RenderSneakers()}
      </ul>
    </div>
  );
}

export default SneakerContainer;
