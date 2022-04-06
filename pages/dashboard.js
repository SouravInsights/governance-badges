import { Box } from "@chakra-ui/react";
import DashboardSection from "../components/Dashboard/Dashboard";
import NavBar from '../components/NavBar';

const Dashboard = () => {
  return (
    <Box bg='black'>
      <NavBar />
    
      <DashboardSection />
    </Box>
  )
}

export default Dashboard;