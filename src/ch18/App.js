import MainHeader from "./components/MainHeader/MainHeader";
import MainLayout from "./components/MainLayout/MainLayout";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import MainBody from "./components/MainBody/MainBody";
import { Global } from "@emotion/react";
import { reset } from "./styles/global";
import { useState } from "react";

function App() {
    const [ isMainSidebarShow, setMainSidebarShow ] = useState(false);

    return (
        <>
            <Global styles={reset} />
            <MainLayout>
                <MainHeader setMainSidebarShow={setMainSidebarShow} />
                <MainBody />
                <MainSidebar
                    isMainSidebarShow={isMainSidebarShow}
                    setMainSidebarShow={setMainSidebarShow}
                />
            </MainLayout>
        </>
    );
}

export default App;