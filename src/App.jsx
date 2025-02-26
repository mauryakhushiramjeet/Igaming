import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import TournamentInfo from "./component/TournamentInfo.jsx";
import Card from "./component/card-componet/Card.jsx";
import bgImage from "./assets/bg.png";

function App() {
    return (
        <div className="bg-[#0D1218] max-w-full">
            <Header />
            <div className="relative text-white bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
                {/* Overlay for Background Opacity */}
                <div className="absolute inset-0 bg-[#0D1218] opacity-95 "></div>

                {/* Content (fully visible) */}
                <div className="relative z-10">
                    <TournamentInfo />
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
