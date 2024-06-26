/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouterStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";

function MainBody() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/routestudy/*" element={<RouterStudyPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;