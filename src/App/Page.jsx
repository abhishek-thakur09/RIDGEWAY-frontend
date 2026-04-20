
import Header from "../components/Header";
import TimeLine from "../components/TimeLine";
import ReviewPannel from "../components/ReviewPannel";
import MapPanel from "../components/SiteMap";
import AiPanel from "../components/Aipannel";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080C16] p-0.5">
      <div className="grid grid-cols-3 gap-4 mt-4">
        <TimeLine />
    
          <MapPanel/>
            <AiPanel/>
      </div>
    </div>
  );
}