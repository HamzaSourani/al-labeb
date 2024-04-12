interface VideoProps {
  src: string;
  validation?: "valid" | "unValid" | "unSet";
  onNext?: () => void;
}
export default VideoProps;
