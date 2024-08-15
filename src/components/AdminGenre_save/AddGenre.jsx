import React, { useEffect } from "react";
import "./AddGenre.css";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Navbaradmin from "../../components/NavAndFooter/NavAdmin";

// import Fotterr from "../../components/NavAndFooter/Footer.jsx"

import Fotterr from "../../components/NavAndFooter/Footer.jsx";

import Genre_txt from "./Genre_txt.jsx";
import { useState } from "react";
import Footer from "../NavAndFooter/Footer.jsx";
import { getGenres } from "../../controller/GenreController";
import { addGenreFn, deleteGenre } from "../../controller/AdminController";
const AddGenre = () => {
  const queryClient = useQueryClient();

  const { data: genreData } = useQuery({
    queryFn: getGenres,
    queryKey: ["genres"],
  });
  const addGenreCall = useMutation({
    mutationFn: (genre) => 
      addGenreFn(genre)
    ,
    onSuccess: () => queryClient.invalidateQueries([`genres`]),
  });
  const remGenreCall = useMutation({
    mutationFn: (genre) => 
    deleteGenre(genre)
    ,
    onSuccess: () => queryClient.invalidateQueries([`genres`]),
  });

  const [addcat, setCategorynew] = useState("");

  const onAddCategory = (event) => {
    setCategorynew(event.target.value);
  };



  return (
    <div className="Addmain">
      <div className="AdminNav">
        {" "}
        <Navbaradmin />{" "}
      </div>

      <div>
        <h3 className="Addheading">Available Categories:</h3>
      </div>

      <div className="Addfilled-box">
        {genreData?.map((g, index) => (
          <div key={index} className="Addcategoryitem">
            <Genre_txt genre={g} />
            <hr className="linee" />
          </div>
        ))}

        <div className="addCatcontainer-save">
          <input
            className="inputCat"
            type="text"
            placeholder="Add New Category"
            value={addcat}
            onChange={onAddCategory}
          />

          {/* <input input className="inputCat" type="text" placeholder ="Add New Category"/> */}
        </div>
      </div>

      <div className="AddBox">
        <div className="Addrectangle"></div>
      </div>

      <div className="Addbuttonsactions">
        <button  className="Addsavebutton" onClick={()=>addGenreCall.mutate(addcat)}>
          Add
        </button>
        <button type="submit" className="Addremovebutton" onClick={()=>remGenreCall.mutate(addcat)}>
          Remove
        </button>
      </div>

      <div className="fotter">
        {" "}
        <Fotterr />
      </div>
    </div>
  );
};
export default AddGenre;
