"use client";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

interface Vessel {
  label: string;
  value: string;
}

const samples: Vessel[] = [
  { label: "Titanic", value: "Titanic" },
  { label: "Enterprise", value: "Enterprise" },
  { label: "Mayflower", value: "Mayflower" },
  { label: "Queen Mary", value: "Queen Mary" },
  { label: "Black Pearl", value: "Black Pearl" },
];

export default function SelectSearch() {
  const [vessels, setVessels] = useState<Vessel[]>([]);
  const [selectedValues, setSelectedValues] = useState<Vessel[]>([]);

  const handleDelete = (valueToDelete: Vessel) => {
    setSelectedValues((prevValues) =>
      prevValues.filter((value) => value !== valueToDelete)
    );
  };
  console.log(selectedValues);
  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <Autocomplete
          disablePortal
          id="combo-box-vessel"
          multiple
          options={samples}
          noOptionsText="No Options found!!"
          onChange={(event, value) => {
            setSelectedValues((prevValues) => [
              ...prevValues,
              ...value.filter((item) => !prevValues.includes(item)),
            ]);
          }}
          value={[]}
          sx={{
            width: 300,
            marginTop: "30px",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Vessel name" />
          )}
        />
      </div>
      <div>
        {selectedValues.map((value) => (
          <Chip
            key={value.value}
            label={value.label}
            onDelete={() => handleDelete(value)}
            sx={{
              marginTop: "20px",
              backgroundColor: "blue", // Change to your desired background color
              color: "white", // Change to your desired text color
              "& .MuiChip-deleteIcon": {
                color: "red", // Change to your desired color for the close icon
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
