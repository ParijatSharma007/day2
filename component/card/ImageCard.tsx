import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styles from '../../style/card.module.css'

interface ProductCardInterface {
    itemImage : string,
    title : string,
}

export default function MediaCard({itemImage, title} : ProductCardInterface) {
  return (
    <div className={styles.card}>
        <Card
        elevation={0}>
            <CardMedia
                sx={{ height: 140 }}
                image={itemImage}
                title={title}
            />
        </Card>
    </div>
  );
}