import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import FeedPageSidebar, { FeedPageSidebarProps } from "./FeedPageSidebar";

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
  background-color: #f4f4f4;
`;

export interface FeedPageProps {
  sidebarProps?: FeedPageSidebarProps; // Sidebar props를 옵셔널로 추가
}

const FeedPage: React.FC<FeedPageProps> = ({ sidebarProps }) => {
  return (
    <PageLayout>
      <FeedPageSidebar {...sidebarProps} />
      <ContentLayout>
        <MainContent>
          {/* 메인 컨텐츠를 여기에 배치하세요 */}
          Main content goes here.
        </MainContent>
      </ContentLayout>
    </PageLayout>
  );
};

export default FeedPage;
