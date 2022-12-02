import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const EditRow = ({ editFromData, handleEditFromChange, handleCancel }) => {
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      key={`edited${editFromData.id}`}
    >
      <TableCell component="th" scope="row"></TableCell>
      <TableCell align="left">
        <Input
          placeholder="Enter name"
          name="name"
          value={editFromData.name}
          onChange={handleEditFromChange}
        />
      </TableCell>
      <TableCell align="left">
        <Input
          placeholder="Enter email"
          name="email"
          value={editFromData.email}
          onChange={handleEditFromChange}
        />
      </TableCell>
      <TableCell align="left">
        <Input
          placeholder="Enter role"
          name="role"
          value={editFromData.role}
          onChange={handleEditFromChange}
        />
      </TableCell>
      <TableCell align="left">
        <Button variant="contained" sx={{ margin: "3px" }} type="submit">
          Save
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "3px" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export {EditRow};
