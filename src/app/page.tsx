// * ------------ @COMPONENTS -----------------------//
import HeroComponent from '@/components/Hero.component';
import ChartComponent from '@/components/Skills.component';
import ProjectsComponent from '@/components/Projects.component';
import JobHistoryComponent from '@/components/JobHistory.component';
import MarketAndSectorComponent from '@/components/MarketAndSectors.component';
import TopGainersOrLosersComponent from '@/components/TopGainersOrLosers.component';
import MarketGaugeComponent from '@/components/MarketGauge.component';
// * ------------ @COMPONENTS -----------------------//

const Home = () => {
  return (
    <>
      <HeroComponent />
      <MarketAndSectorComponent />
      <TopGainersOrLosersComponent />
      {/* <ChartComponent data={initialData} /> */}
      {/* <MarketGaugeComponent /> */}
      {/* <ProjectsComponent /> */}
      {/* <JobHistoryComponent /> */}
    </>
  );
};

export default Home;
