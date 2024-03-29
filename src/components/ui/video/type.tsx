interface VideoProps {
  src: string;
  validation?: "valid" | "unValid" | "unSet";
  previousUrl?: string;
  disableNextButton?: boolean;
  onNext?: () => void;
}
export default VideoProps;
