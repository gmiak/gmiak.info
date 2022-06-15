import { FunctionComponent } from "react";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import { AboutScreen } from "../../view/screens/about/aboutScreen";
import { HomeScreen } from "../../view/screens/home/homeScreen";
import { ProfileScreen } from "../../view/screens/profile/profileScreen";
import { ProjectsScreen } from "../../view/screens/projects/projectsScreen";
import { EnglishScreen } from "../../view/screens/resources/englishScreen";
import { FrenchScreen } from "../../view/screens/resources/frenchScreen";
import { LingalaScreen } from "../../view/screens/resources/lingalaScreen";
import { ResourcesScreen } from "../../view/screens/resources/resourcesScreen";
import { SwedishScreen } from "../../view/screens/resources/swedishScreen";


export const RouterApp: FunctionComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/second" element={<ProjectsScreen />} />
                <Route path="/third" element={<EnglishScreen />} />
                <Route path="/third_two" element={<FrenchScreen />} />
                <Route path="/third_three" element={<SwedishScreen />} />
                <Route path="/third_four" element={<LingalaScreen />} />
                <Route path="/fourth" element={<AboutScreen />} />
                <Route path="/fifth" element={<ProfileScreen />} />
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </Router>
    );
};