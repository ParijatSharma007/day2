import { fetchProducts, fetchSingleProduct } from "@/axiosCalls/productsAxiosCalls";
import { useQuery } from "@tanstack/react-query";

export function useGetProducts() {
    const {data, isLoading, error, isError} = useQuery({
        queryKey : ["products"],
        queryFn : fetchProducts
    })

    return {data, isLoading, error, isError}
}


export function useGetSingleProducts(id : number) {
    const {data, isLoading, error, isError} = useQuery({
        queryKey : [`product-id-${id}`],
        queryFn : () => fetchSingleProduct(id),
        enabled : id?true:false
    })

    return {data, isLoading, error, isError}
}