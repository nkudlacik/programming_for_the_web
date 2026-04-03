{/* IMPORTS */}
import { useForm } from "react-hook-form";
import "./NewMovementForm.css";

{/* NEWMOVEMENTFORM FN */}
export function NewMovementForm({ addDesignDeck }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const movementValue = watch("movement", "");

  function handleSubmitJob(data) {
    addDesignDeck(data);
    reset();
  }

{/* USER INPUT AREAS */}
  return (
    <div className="form-wrapper">
      <h4>. ݁₊ ⊹ . ݁˖ . ݁Log a Design Movement! . ݁₊ ⊹ . ݁˖ . ݁</h4>

      <form onSubmit={handleSubmit(handleSubmitJob)}>

{/* INPUT MOVEMENT NAME */}
        <div className="form-group">
          <label htmlFor="movementName">Movement Name</label>
          <input
            id="movementName"
            type="text"
            maxLength={20}
            {...register("movement", {
              required: true,
              maxLength: 20
            })}
          />

{/* INPUT MOVEMENT NAME - ERRORS & WARNINGS */}
          {errors.movement?.type === "required" && (
            <p className="error">Movement name is required</p>
          )}
          {movementValue.length === 20 && (
            <p className="warning">20 character limit reached</p>
          )}
        </div>

{/* INPUT YEARS SPANNED - PLACEHOLDER TEXT */}
        <div className="form-group">
          <label htmlFor="movementSpan">Years Spanned (XXXX-XXXX)</label>
          <input
            id="movementSpan"
            type="text"
            maxLength={9}
            placeholder="e.g. 1980-1989"
            {...register("span", {
              required: true,
              maxLength: 9
            })}
          />
{/* INPUT YEARS SPANNED - ERRORS & WARNINGS */}
          {errors.span?.type === "required" && (
            <p className="error">Years spanned is required</p>
          )}
          {errors.span?.type === "maxLength" && (
            <p className="error">Maximum 9 characters</p>
          )}
        </div>

{/* INPUT IMAGE */}
        <div className="form-group">
          <label htmlFor="movementImage">Image URL</label>
          <input
            id="movementImage"
            type="text"
            {...register("image", { required: true })}
          />
{/* INPUT IMAGE - ERRORS & WARNINGS*/}
          {errors.image && (
            <p className="error">Image URL is required</p>
          )}
        </div>

{/* INPUT "MADE FOR KIDS?" */}
        <div className="made-for-kids">
            <div className="form-group">
            <label htmlFor="forKids">
                <input
                id="forKids"
                type="checkbox"
                {...register("forKids")}
                />{" "}
                Made For Kids?
            </label>
            </div>
        </div>

{/* INPUT COLORS */}
        <div className="colors-input">
            <div className="form-group">
            <label>Colors</label>
            <label>
                <input type="checkbox" value="red" {...register("colors")} /> red
            </label>
            <label>
                <input type="checkbox" value="orange" {...register("colors")} /> orange
            </label>
            <label>
                <input type="checkbox" value="yellow" {...register("colors")} /> yellow
            </label>
            <label>
                <input type="checkbox" value="green" {...register("colors")} /> green
            </label>
            <label>
                <input type="checkbox" value="blue" {...register("colors")} /> blue
            </label>
            <label>
                <input type="checkbox" value="purple" {...register("colors")} /> purple
            </label>
            </div>
        </div>

{/* SUBMIT BUTTON */}
        <button type="submit">Add Movement</button>
      </form>
    </div>
  );
}