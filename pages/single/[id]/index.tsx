import React from 'react'
import { useRouter } from 'next/router'
import { useGetSingleProducts } from '@/hooks/productHooks'

const SingleItem = () => {
  
  const {id} = useRouter().query

  const {data, isLoading} = useGetSingleProducts(Number(id))

  console.log(data);
  

  return (
    <div>
        <h1></h1>
    </div>
  )
}

export default SingleItem
