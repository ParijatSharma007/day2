import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ProductCardInterface {
    description : string,
    name : string
}

export default function MediaCard({description, name} : ProductCardInterface) {
  return (
        <Card
        elevation={0}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
        </Card>
  );
}