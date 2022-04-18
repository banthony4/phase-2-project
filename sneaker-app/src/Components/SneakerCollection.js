import Sneaker from './Sneaker'

function SneakerCollection({ sneakers }) {

  const RenderSneakers = () => {
    return sneakers.map(sneak => {
      return <Sneaker key={sneak.id} sneaker={sneak} />
    })
  }
  return (
    <ul className="SneakerCollection">
      {RenderSneakers()}
    </ul>
  );
}

export default SneakerCollection;
