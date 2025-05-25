
import FirstDashboardSection from '../Sections/FirstDashboardSection';
import SecondDahboardSection from '../Sections/SecondDahboardSection';

const Dashboard = () => {
  return (
 <div className="grid grid-cols-1 lg:grid-cols-2 ">
  <div className="flex flex-col space-y-6">
        <FirstDashboardSection/>
  </div>

  <div className="flex flex-col space-y-6">

        
        <SecondDahboardSection/>
  </div>
</div>

  );
}

export default Dashboard;