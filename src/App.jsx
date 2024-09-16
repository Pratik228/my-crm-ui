import Activity from "./components/Activity";
import ContactedStatus from "./components/ContactedStatus";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StageHistory from "./components/StageHistory";
import SuperTitle from "./components/SuperTitle";
import UpcomingOverview from "./components/UpcomingOverview";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <SuperTitle />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Breadcrumb />
          <Header />
          <main className="flex-1 overflow-y-auto bg-white p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-2/5">
                <ContactedStatus />
              </div>
              <div className="lg:w-3/5 flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="lg:w-3/5">
                    <Activity />
                  </div>
                  <div className="lg:w-2/5">
                    <StageHistory />
                  </div>
                </div>
                <UpcomingOverview />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
