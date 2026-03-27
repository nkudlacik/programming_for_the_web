import { useForm } from "react-hook-form";
import "./NewMovementForm.css"

export function NewMovementForm({ addDesignDeck }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function handleSubmitJob(data) {
    addDesignDeck(data);
    reset();
  }

  return (
    <div className="form-wrapper">
        <h4>Add Your Own Movement!</h4>
      <form onSubmit={handleSubmit(handleSubmitJob)}>

        {/* Movement Name */}
        <div className="form-group">
          <label htmlFor="movementName">Movement Name</label>
          <input
            id="movementName"
            type="text"
            {...register("movement", { required: true })}
          />
          {errors.movement && <p className="error">Required</p>}
        </div>

        {/* Image */}
        <div className="form-group">
          <label htmlFor="movementImage">Image URL</label>
          <input
            id="movementImage"
            type="text"
            {...register("image", { required: true })}
          />
          {errors.image && <p className="error">Required</p>}
        </div>

        {/* Colors */}
        <div className="form-group">
          <p>Colors</p>

          <label><input type="checkbox" value="red" {...register("colors")} /> red</label>
          <label><input type="checkbox" value="orange" {...register("colors")} /> orange</label>
          <label><input type="checkbox" value="yellow" {...register("colors")} /> yellow</label>
          <label><input type="checkbox" value="green" {...register("colors")} /> green</label>
          <label><input type="checkbox" value="blue" {...register("colors")} /> blue</label>
          <label><input type="checkbox" value="purple" {...register("colors")} /> purple</label>
        </div>

        {/* For Kids */}
        <div className="form-group">
          <label htmlFor="forKids">
            <input
              id="forKids"
              type="checkbox"
              {...register("forKids")}
            />{" "}
            For Kids?
          </label>
        </div>

        <button type="submit">Add Movement</button>
      </form>
    </div>
  );
}