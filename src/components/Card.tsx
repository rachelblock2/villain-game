import { useParams } from "react-router-dom";

export default function Card() {
    // const {data} = props
    const params = useParams<{profileId: string}>();
    console.log(params);
  return (
    <div>
        <h1>Card page {params.profileId}</h1>
    </div>
  );
}