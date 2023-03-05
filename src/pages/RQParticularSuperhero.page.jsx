import { useParams } from "react-router-dom";
import { useParticularSuperheroData } from "../hooks";

const RQParticularSuperheroPage = () => {
  const { superhero_id } = useParams();
  const {
    isLoading,
    error,
    isError,
    data: particular_superhero_info,
  } = useParticularSuperheroData(superhero_id);
  if (isLoading) {
    return <h4>Loading superhero details</h4>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }
  return (
    <div>
      Welcome to the superhero info page
      <h4>
        Superhero_name:{" "}
        {particular_superhero_info?.data
          ? particular_superhero_info?.data.superhero_name
          : particular_superhero_info?.superhero_name}{" "}
      </h4>
      <h4>
        Superhero Alter ego:{" "}
        {particular_superhero_info?.data
          ? particular_superhero_info?.data.superhero_alter_ego
          : particular_superhero_info?.superhero_alter_ego}
      </h4>
    </div>
  );
};
export { RQParticularSuperheroPage };
