import { useParams } from "react-router-dom";

export default function EditGenre() {
  // Get params from url
  // You need to configure this in the route-config.ts 1st  
  const { id }: any = useParams();
  return (
    <>
      <h3>Edit Genre</h3>
      The id is {id}
    </>
  );
}
