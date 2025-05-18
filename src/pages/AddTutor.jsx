// In this route user will show a form with the following input field
// name(who logged in)
// email  (who logged in)
// Image (tutorial image)
// language
// price
// description
// review :(0 by default)
// submit button

import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Rating } from "react-simple-star-rating";

const AddTutor = () => {

  const [rating, setRating] = useState(0);
  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const {user} = useContext(AuthContext);
  return (
    <main>
      <form>
        <fieldset className="fieldset p-4 w-11/12 mx-auto">
          <legend className="fieldset-legend mx-auto text-3xl font-bold">
            Add Tutor
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                defaultValue={user?.email}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <label className="label">Tutor's Image URL</label>
              <input
                type="url"
                className="input w-full"
                placeholder="https://example.com/poster.jpg"
                name="image"
              />
            </div>
            <div>
              <label className="label">Language</label>
              <select
                className="select w-full"
                name="genre"
                defaultValue="Select"
              >
                <option disabled value="Select">
                  Select Language
                </option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Spanish">Spanish</option>
                <option value="Italic">Italic</option>
                <option value="Chinese">Chinese</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Portugese">Portugese</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">Price</label>
              <input
                type="number"
                className="input w-full"
                placeholder="price"
                name="price"
              />
            </div>
            <div>
              <label className="label">Review</label>
              <div><Rating
                iconsCount={5}
                onClick={handleRatingClick}
                ratingValue={rating} // Use the direct 'rating' state
                allowHalfIcon
                allowFraction
                size={30}
                transition
                fillColor="palegreen"
                emptyColor="gray"
                className="star-rating"
                SVGstyle={{ display: "inline-block" }}
                numStars={5} // Set the total number of stars to 10
              /></div>
              
            </div>
          </div>

          <div className="mt-4">
            <label className="label">Description</label>
            <textarea
              className="textarea w-full"
              placeholder="Enter at least 50 characters"
              name="description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-neutral mt-6 w-full md:w-auto"
          >
            Add Tutor
          </button>
        </fieldset>
      </form>
    </main>
  );
};

export default AddTutor;