import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

// Emotion을 사용하여 추가적인 스타일링을 위한 스타일 컴포넌트를 정의합니다.
const CustomCard = styled(Card)`
  overflow: hidden;
  transition: transform 200ms;
  &:hover {
    transform: scale(1.05);
  }
`;

const CustomImage = styled("img")`
  object-cover;
  transition: transform 200ms;
  border-radius: 4px;
  &:hover {
    transform: scale(1.1);
  }
`;

interface ComponentProps {
  title: string;
  author: string;
  summary: string;
  thumbnailSrc: string;
}

export default function Component({
  title,
  author,
  summary,
  thumbnailSrc,
}: ComponentProps) {
  return (
    <CustomCard>
      <CardContent sx={{ display: "flex", flexDirection: "row", gap: 2, p: 2 }}>
        <div style={{ flexShrink: 0 }}>
          <CustomImage
            alt="Thumbnail"
            height="80"
            src={thumbnailSrc}
            width="80"
            style={{
              aspectRatio: "1 / 1",
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            By {author}
          </Typography>
          <Typography variant="body2">{summary}</Typography>
        </div>
      </CardContent>
    </CustomCard>
  );
}
