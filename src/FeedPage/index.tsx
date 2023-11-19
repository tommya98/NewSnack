import React, { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import FeedPageSidebar, { FeedPageSidebarProps } from "./FeedPageSidebar";
import HomePage from "./HomePage";
import ExplorePage from "./ExplorePage";
import HistoryPage from "./HistoryPage";
import FavoritePage from "./FavoritePage";
import SettingsPage from "./SettingsPage";

const PageLayout = styled(Box)`
  display: flex;
  height: 100vh;
`;

const ContentLayout = styled(Box)`
  display: flex;
  flex-direction: column; /* 콘텐츠 레이아웃을 위해 column 방향을 설정 */
  flex-grow: 1; /* Sidebar 옆에서 나머지 공간을 채우도록 설정 */
`;

const MainContent = styled(Box)`
  flex-grow: 1;
  padding: theme.spacing(3);
  background-color: #fefef9;
`;

export interface FeedPageProps {
  sidebarProps?: FeedPageSidebarProps; // Sidebar props를 옵셔널로 추가
}

const FeedPage: React.FC<FeedPageProps> = ({ sidebarProps }) => {
  const [page, setPage] = useState("home");

  return (
    <PageLayout>
      <FeedPageSidebar {...sidebarProps} setPage={setPage} />
      <ContentLayout>
        <MainContent>
          {page === "home" && <HomePage></HomePage>}
          {page === "explore" && <ExplorePage></ExplorePage>}
          {page === "history" && <HistoryPage></HistoryPage>}
          {page === "favorite" && <FavoritePage></FavoritePage>}
          {page === "settings" && <SettingsPage></SettingsPage>}
        </MainContent>
      </ContentLayout>
    </PageLayout>
  );
};

export default FeedPage;
