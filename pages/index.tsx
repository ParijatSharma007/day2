import React from "react";
import Layout from "../component/layout";
import Card from "../component/card/ProductCard"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useGetProducts } from "@/hooks/productHooks";
import LoadingProducts from "@/component/loader/LoadingProducts";
import { useRouter } from "next/router";

export default function Home () {

    const router = useRouter()

    interface Rating {
        rate: number
        count: number
      }

    interface Products {
        id: number
        title: string
        price: number
        description: string
        category: string
        image: string
        rating: Rating
      }

    const {data, isLoading, error} = useGetProducts()

    if(isLoading){
        return(
        <Layout>
            <LoadingProducts/>
        </Layout>
        )
    }

    return (
        <Layout>
            <Container style={{paddingTop : "35px"}}>
                <Grid container  spacing={{ xs: 12 ,md : 2 }}>
                        {data?.map((item : Products, idx : number) => (
                            <Grid marginBottom={{ xs: 4, sm: 8, md: 3 }} item xs={12} sm={4} md={idx === 0||idx === 1 ? 6 : 4} key={idx}>
                                <Card
                                onClick={() => {router.push(`/single/${item.id}`)}}
                                itemImage = {item.image}
                                title={item.title}
                                description={item.description}
                                name = {item.title}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </Layout>
    )
}