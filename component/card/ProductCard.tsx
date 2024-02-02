import ContentCard from "./ContentCard"
import ImageCard from "./ImageCard"

interface ProductCardInterface {
    itemImage : string,
    title : string,
    description : string,
    name : string,
    onClick : any
}

export default function MediaCard({itemImage, title, description, name, onClick} : ProductCardInterface) {
  return (
    <div onClick={onClick}>
        <ImageCard
            itemImage={itemImage}
            title={title}
        />
        <ContentCard
            description={description}
            name={name}
        />
    </div>
  );
}