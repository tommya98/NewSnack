import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Emotion을 사용하여 추가적인 스타일링을 위한 스타일 컴포넌트를 정의합니다.
const CustomCard = styled(Card)`
  overflow: hidden;
  transition: transform 200ms;
  div {
    margin: 0;
    padding-left: 0;
    padding-right: 0;
  }
  box-shadow: none;
  background-color: transparent;
`;

const CustomImage = styled("img")`
  object-cover;
  transition: transform 200ms;
  border-radius: 8px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
`;

const MoreButton = styled(IconButton)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
`;

const Author = styled(Typography)`
  color: rgba(0, 0, 0, 0.4);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 80% */
`;

const Summary = styled(Typography)`
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 113.333% */
`;

interface ComponentProps {
  title: string;
  author: string;
  summary: string;
  thumbnailSrc: string;
  isLiked?: boolean;
  originalURL: string;
  toggleLike?: () => void;
}

export default function Component({
  title,
  author,
  summary,
  thumbnailSrc,
  isLiked,
  originalURL,
  toggleLike = () => {
    console.log("test");
  },
}: ComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CustomCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Wrapper>
        <CardContent
          sx={{ display: "flex", flexDirection: "row", gap: 2, p: 2 }}
        >
          <div style={{ flexShrink: 0 }}>
            <CustomImage
              alt="Thumbnail"
              height="90"
              src={thumbnailSrc}
              width="135"
              style={{
                aspectRatio: "1 / 1",
              }}
              onClick={() => {
                const openNewWindow = window.open("about:blank");
                if (openNewWindow) openNewWindow.location.href = originalURL;
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Title>{title}</Title>
            <Author>By {author}</Author>
            <Summary>{summary}</Summary>
          </div>
          {isHovered && (
            <MoreButton aria-label="more" onClick={toggleLike}>
              {isLiked && <FavoriteIcon />}
              {!isLiked && <FavoriteBorderIcon />}
            </MoreButton>
          )}
        </CardContent>
      </Wrapper>
    </CustomCard>
  );
}
