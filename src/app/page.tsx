import HomePage from "@/components/HomeHeroSection/page";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Home = () => {
  return (   
    <QueryClientProvider client={queryClient}>    
    <>      
    <HomePage/>
    </>    
    </QueryClientProvider>
  );
};


export default Home;