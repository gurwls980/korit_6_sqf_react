import MainHeader from "./components/MainHeader/MainHeader";
import MainLayout from "./components/MainLayout/MainLayout";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import MainBody from "./components/MainBody/MainBody";
import { Global } from "@emotion/react";
import { reset } from "./styles/global";

function App() {
    return (
        <>
            <Global styles={reset} />
            <MainLayout>
                <MainHeader />
                <MainBody />
                <MainSidebar />
            </MainLayout>
        </>
    );
}

export default App;