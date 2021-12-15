import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

const Converter = () => {
  const [nep, setNep] = React.useState(0);
  const [busd, setBusd] = React.useState(0);

  function format(num) {
    return num.toFixed(2);
  }

  const handleNepChange = (e) => {
    const val = e.target.value;
    setNep(val);
    setBusd(format(val * 3));
  };

  const handleBusdChange = (e) => {
    const val = e.target.value;
    setNep(format(val / 3));
    setBusd(val);
  };

  return (
    <div>
      <FormControl id="NEP">
        <FormLabel>NEP</FormLabel>
        <Input
          type="number"
          onChange={(e) => handleNepChange(e)}
          variant="filled"
          value={nep}
        />
      </FormControl>
      <div
        style={{
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RepeatIcon />
      </div>
      <FormControl id="BUSD">
        <FormLabel>BUSD</FormLabel>
        <Input
          type="number"
          onChange={(e) => handleBusdChange(e)}
          variant="filled"
          value={busd}
        />
      </FormControl>
    </div>
  );
};

export default Converter;
