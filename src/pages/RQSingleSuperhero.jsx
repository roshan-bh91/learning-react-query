import { useParams } from "react-router-dom";
import { useSingleSuperheroData } from "../hooks/useSingleSuperheroData";

const RQSingleSuperhero = () => {
  const { id: specific_superhero_id } = useParams();
  console.log(specific_superhero_id);
  const {
    isError,
    error,
    data,
  } = useSingleSuperheroData(specific_superhero_id);
  if (isError) {
    return <h4>{error.message}</h4>;
  }
  console.log(data);
  return (
    <div>
      <h4>Hero details</h4>
      <p>Superhero name: {data?.data[0].superhero_name}</p>
      <p>Superhero Alter Ego : {data?.data[0].superhero_alter_ego}</p>
    </div>
  );
};
export { RQSingleSuperhero };
