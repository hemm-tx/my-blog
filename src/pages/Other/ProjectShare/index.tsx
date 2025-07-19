import { Display } from "@/components";

const items = [
  {
    label: "ffmpeg 推流海康威视摄像头",
    key: "push-hikvision-camera",
  },
];

export default function OtherPage() {
  return <Display parentPath="project-share" items={items} />;
}
