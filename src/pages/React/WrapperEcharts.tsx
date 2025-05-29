import { ContentCard } from "@/components";
import { useRef } from "react";

const WrapperEcharts = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-row overflow-y-auto" id="wrapper-axios-content-container">
      <div className="w-3/4 flex flex-col relative" ref={contentRef}>
        <ContentCard title="封装 Echarts">
          <span>还没想好怎么写，先放这儿吧</span>
        </ContentCard>
      </div>
    </div>
  );
};

export default WrapperEcharts;
