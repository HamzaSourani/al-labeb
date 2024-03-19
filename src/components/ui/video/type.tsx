interface VideoProps {
  src: string;
  onNext?: () => void;
  previousUrl?: string;
  disableNextButton?: boolean;
}
export default VideoProps;
