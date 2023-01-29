export interface CaptionProps {
  title: string;
}
export interface StageProps {
  component: JSX.Element;
}

export interface StagesProps {
  captions: Array<CaptionProps>;
  stages: Array<StageProps>;
}
