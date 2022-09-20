import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import Select from "react-select";

const ItemGroup = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState({ agree: false });
  const [ram1, setRam] = useState([]);
  const [processor1, setProcessor] = useState([]);
  const [disc1, setDisc] = useState([]);

  const column = [{ heading: "Atrribute" }, { heading: "Options" }];

  const ram = [
    { value: "1", label: "4 GB" },
    { value: "2", label: "8 GB" },
    { value: "3", label: "16 GB" },
    { value: "4", label: "32 GB" },
    { value: "5", label: "64 GB" },
    { value: "6", label: "128 GB" },
  ];

  const processor = [
    { value: "1", label: "RIZEN" },
    { value: "2", label: "AMD" },
    { value: "3", label: "Iten" },
    { value: "4", label: "AMD A10" },
    { value: "5", label: "RYZEN5" },
    { value: "6", label: "Intel Core" },
  ];

  const disc = [
    { value: "1", label: "1TB" },
    { value: "2", label: "500GB" },
    { value: "3", label: "256GB" },
    { value: "4", label: "128GB" },
    { value: "5", label: "512GB" },
    { value: "6", label: "1GB" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setData({ ...user, [name]: value });
  };
  console.log("data", data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };

  const handleRam = (e) => {
    setRam(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handleProcessor = (e) => {
    setProcessor(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handleDisc = (e) => {
    setDisc(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  const Manufacturer = [
    { label: "Dell" },
    { label: "HP" },
    { label: "Lenovo" },
  ];

  const brand = [{ label: "Dell" }, { label: "HP" }, { label: "Lenovo" }];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 10,
            marginTop: 30,
          }}
        >
          <label>Item Group Name</label>
          <input
            type="text"
            name="name"
            placeholder="Laptop"
            onChange={handleChange}
            style={{ marginLeft: 30, width: 710, height: 30 }}
          />
        </div>

        <div style={{ display: "flex", marginLeft: 30, marginBottom: 30 }}>
          <label>Description</label>
          <textarea
            type="tel"
            name="mobile"
            onChange={handleChange}
            style={{ marginLeft: 75, width: 715 }}
          />
        </div>
        <div style={{ display: "flex", marginLeft: 30, marginBottom: 20 }}>
          <label>Unit</label>
          <select
            name="pcs"
            onChange={handleChange}
            style={{ marginLeft: 130, width: 300, height: 50 }}
          >
            <option value="pcs">Pcs</option>
            <option value="boxes">Boxes</option>
            <option value="dozons">Dozens</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: 30,
          }}
        >
          <label>Manufacturer</label>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Manufacturer}
            sx={{ width: 300, marginLeft: 8 }}
            renderInput={(params) => <TextField {...params} label="Dell" />}
          />
          <label style={{ marginLeft: 30 }}>Brand</label>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={brand}
            sx={{ width: 300, marginLeft: 5 }}
            renderInput={(params) => <TextField {...params} label="Dell" />}
          />
        </div>

        <div style={{ display: "flex", marginLeft: 30 }}>
          <label>Multiple Items?</label>
          <label style={{ marginLeft: 45, marginTop: 40, color: "red" }}>
            Attribute
          </label>
          <label style={{ marginTop: 40, marginLeft: 290, color: "red" }}>
            Options
          </label>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <div>
            <select
              name="RAM"
              onChange={handleChange}
              style={{ marginLeft: 155, height: 50, width: 300, marginTop: 20 }}
              placeholder="Ram"
            >
              <option value="">None</option>
              <option value="ram">RAM</option>
            </select>
          </div>
          <div
            style={{ marginLeft: 50, height: 50, width: 300, marginTop: 20 }}
          >
            <Select options={ram} isMulti onChange={handleRam} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <div>
            <select
              name="Processor"
              onChange={handleChange}
              style={{ marginLeft: 155, height: 50, width: 300, marginTop: 20 }}
            >
              <option value="">None</option>
              <option value="processor">Processor</option>
            </select>
          </div>
          <div
            style={{ marginLeft: 50, height: 50, width: 300, marginTop: 20 }}
          >
            <Select options={processor} isMulti onChange={handleProcessor} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <div>
            <select
              name="DISC"
              onChange={handleChange}
              style={{ marginLeft: 155, height: 50, width: 300, marginTop: 20 }}
            >
              <option value="" onChange={handleChange}>
                None
              </option>
              <option value="disc" onChange={handleChange}>
                DISC
              </option>
            </select>
          </div>
          <div
            style={{ marginLeft: 50, height: 50, width: 300, marginTop: 20 }}
          >
            <Select options={disc} isMulti onChange={handleDisc} />
          </div>
        </div>

        <table
          border={"1px"}
          cellPadding={"4px"}
          width={"50%"}
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              {column.map((item, index) => (
                <TableHeadItem item={item} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {!data.RAM && !data.Processor && !data.DISC && (
                <td colSpan={2} style={{ textAlign: "center" }}>
                  No Data Found
                </td>
              )}
            </tr>
            <tr>
              {data.RAM && (
                <>
                  <td>RAM</td>
                  <td>{ram1 + "  "}</td>
                </>
              )}
            </tr>
            <tr>
              {data.Processor && (
                <>
                  <td>Processor</td>
                  <td>{processor1 + "  "}</td>
                </>
              )}
            </tr>
            <tr>
              {data.DISC && (
                <>
                  <td>DISC</td>
                  <td>{disc1 + "  "}</td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};
const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
export default ItemGroup;
