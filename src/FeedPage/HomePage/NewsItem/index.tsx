import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Emotion을 사용하여 추가적인 스타일링을 위한 스타일 컴포넌트를 정의합니다.
const CustomCard = styled(Card)`
  overflow: hidden;
  transition: transform 200ms;
  &:hover {
    transform: scale(1.05);
  }
  div {
    margin: 0;
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

const Icon = styled("svg")({
  width: "1.25rem", // Equivalent to w-5
  height: "1.25rem", // Equivalent to h-5
});

interface ComponentProps {
  title: string;
  author: string;
  summary: string;
  thumbnailSrc: string;
  isLiked?: boolean;
}

export default function Component({
  title,
  author,
  summary,
  thumbnailSrc,
  isLiked,
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
        <Icon
          viewBox="0 0 24 24"
          fill={isLiked ? "red" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => console.log(title)}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.5 2.41A4.481 4.481 0 0 1 12 7c1.54 0 3.04.99 3.5 2.41A4.481 4.481 0 0 1 18.5 5C20.5 5 22 6.5 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </Icon>
      </CardContent>
    </CustomCard>
  );
}
