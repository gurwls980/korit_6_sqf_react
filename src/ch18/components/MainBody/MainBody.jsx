/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouterStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";
import HomePage from "../../pages/HomePage/HomePage";
import ParamsStudyPage from "../../pages/ParamsStudyPage/ParamsStudyPage";
import SearchParamsStudy from "../../pages/SearchParamsStudy/SearchParamsStudy";
import CustomHookPage from "../../pages/CustomHookPage/CustomHookPage";
import MemoizationPage from "../../pages/MemoizationPage/MemoizationPage";

function MainBody() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/routestudy/*" element={<RouterStudyPage />} />
                <Route path="/params/:name/*" element={<ParamsStudyPage />}/>
                <Route path="/searchparams" element={<SearchParamsStudy />}/>
                <Route path="/customhook/:id" element={<CustomHookPage />}/>
                <Route path="/memoization" element={<MemoizationPage />}/>
            </Routes>
        </div>
    );
}

export default MainBody;