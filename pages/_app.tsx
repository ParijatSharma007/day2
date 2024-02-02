import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppProps } from "next/app"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps } : AppProps) {
    return (
      <QueryClientProvider client={queryClient}>  
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
      )
  }