import React, { useReducer, useState } from "react";
import "./Add.scss";
import { jobReducer, INITIAL_STATE } from "../../reducers/jobReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(jobReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (job) => {
      return newRequest.post("/jobs", job);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myjobs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/myjobs")
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Neue Stelle hinzufügen</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Name und Vorname</label>
            <input
              type="text"
              name="title"
              placeholder="Alber Einstein"
              onChange={handleChange}
            />
            <label htmlFor="">Kategorie</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="null">Wähle ein</option>
              <option value="kinderbetreuung">Kinderbetreuung</option>
              <option value="aupair">Au-pair</option>
              <option value="seniorenbetreuung">Seniorenbetreuung</option>
              <option value="tierbetreuung">Tierbetreuung</option>
              <option value="haushalshilfe">Haushalshilfe</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Titelbild</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Galeriebilder (max 3)</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">kurze Beschreibung über Sie</label>
            <textarea
              name="desc"
              id=""
              placeholder="Stellen Sie Ihren Service dem Kunden vor"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>

   
<label htmlFor="">Postleitzahl, wo Sie arbeiten können</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="10405 oder Prenzlauerberg" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>

            <label htmlFor="">Ungefährer Preis pro Stunde</label>
            <input type="number" onChange={handleChange} name="price" />

            <button onClick={handleSubmit}>Create</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Add;
