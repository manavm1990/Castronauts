import { useParams } from "react-router-dom";

export default function Track() {
  const { trackId } = useParams();
  return <p>👋🏾 {trackId}</p>;
}
