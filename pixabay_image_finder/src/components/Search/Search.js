import React, { useEffect, useState } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "../ImageResults/ImageResults";

export const Search = () => {
  const [state, setState] = useState({
    apiUrl: "https://pixabay.com/api",
    apiKey: "18652069-bc27d58e7644e0966f205ad6d",
  });

  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(15);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (searchText === "") {
      setImages([]);
    } else {
      axios
        .get(
          `${state.apiUrl}/?key=${state.apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
        )
        .then((response) => setImages(response.data.hits))
        .catch((err) => console.log(err));
    }
  }, [amount, searchText, state.apiKey, state.apiUrl]);

  const onTextChange = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    setSearchText(searchValue);
  };

  const onAmountChange = (e, index, value) => {
    setAmount(value);
  };

  return (
    <div>
      <TextField
        name="searchText"
        value={searchText}
        onChange={onTextChange}
        floatingLabelText="Search For Images"
        fullWidth={true}
      />
      <br />
      <SelectField
        name="Amount"
        floatingLabelText="Amount"
        value={amount}
        onChange={onAmountChange}
      >
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={30} primaryText="30" />
        <MenuItem value={50} primaryText="50" />
      </SelectField>
      <br />
      {images.length > 0 ? <ImageResults images={images} /> : null}
    </div>
  );
};
