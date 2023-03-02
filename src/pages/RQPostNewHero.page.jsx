import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperheroData, useSuperheroesCollection } from "../hooks";
const RQPostNewHeroPage = () => {
  const initialFormData = {
    superhero_name: "",
    superhero_alter_ego: "",
  };
  const [formData, updateFormData] = useState(initialFormData);
  const updateFormData_change_event = (changeEvent) => {
    const {
      target: { name, value },
    } = changeEvent;
    updateFormData((prev) => ({ ...prev, [name]: value }));
  };
  const {
    isLoading,
    error,
    isError,
    data: superhero_response,
    refetch,
  } = useSuperheroesCollection();
  const { mutate: addNewHeroFn } = useAddSuperheroData();
  if (isLoading) {
    return <h4>Loading the whole area...</h4>;
  }
  if (isError) {
    return <h5>{error.message}</h5>;
  }

  return (
    <div>
      <h4>Add a new superhero</h4>
      <div>
        Provide name of the superhero and alterego
        <form
          onSubmit={(submitEvent) => {
            submitEvent.preventDefault();
            addNewHeroFn({
              ...formData,
            });
            updateFormData(initialFormData);
          }}
        >
          <label htmlFor="superhero_name">Name</label>
          <input
            id="superhero_name"
            name="superhero_name"
            value={formData.superhero_name}
            onChange={updateFormData_change_event}
            type="text"
            placeholder="name of the superhero"
          />
          <label htmlFor="superhero_alter_ego">Name</label>
          <input
            id="superhero_alter_ego"
            name="superhero_alter_ego"
            value={formData.superhero_alter_ego}
            onChange={updateFormData_change_event}
            type="text"
            placeholder="alter ego of the superhero"
          />
          <button type="submit">ADD NEW SUPERHERO</button>
        </form>
      </div>
      <button onClick={refetch}>FETCH ALL SUPERHEROES</button>
      <div>
        <h4>Superheroes list with links</h4>
        <ul>
          {superhero_response?.data.map((every_superhero) => {
            return (
              <li key={every_superhero.id}>
                <Link
                  to={`/rq-add-superhero/${
                    every_superhero.id
                  }`}
                >
                  {every_superhero.superhero_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export { RQPostNewHeroPage };
