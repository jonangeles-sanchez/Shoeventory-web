import React, { useCallback, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useEffect } from "react";
import { useGetCollectionMutation } from "../../slices/inventoryApiSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { setShoes } from "../../slices/inventorySlice";
import { useDispatch } from "react-redux";
import { useAddShoesToCollectionMutation } from "../../slices/inventoryApiSlice";
import { useDeleteShoesFromCollectionMutation } from "../../slices/inventoryApiSlice";
import { useUpdateShoesFromCollectionMutation } from "../../slices/inventoryApiSlice";

const InventoryViewOne = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [getCollection, { isLoading }] = useGetCollectionMutation();
  const id = useParams();
  const token = useSelector((state) => state.auth.userInfo.token);
  const dispatch = useDispatch();
  const [addShoesToCollection, { isLoading: addShoesLoading }] =
    useAddShoesToCollectionMutation();
  const [deleteShoesFromCollection, { isLoading: deleteShoesLoading }] =
    useDeleteShoesFromCollectionMutation();
  const [updateShoesInCollection, { isLoading: updateShoesLoading }] =
    useUpdateShoesFromCollectionMutation();

  useEffect(() => {
    // Make your API call here to fetch the data
    // Once the data is received, update the tableData state
    const fetchData = async () => {
      try {
        const response = await getCollection({
          collectionId: id.id,
          token: token,
        });
        const data = await response.data;
        dispatch(setShoes([...data.shoes]));
        setTableData([...data.shoes]);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  const handleCreateNewRow = async (values) => {
    // tableData.push(values);
    // console.log("--- handleCreateNewRow ---");
    // console.log(tableData);
    // console.log("--- handleCreateNewRow ---");
    const httpBody = {
      collectionId: id.id,
      shoeCollectionId: id.id,
      manufacturer: values.manufacturer,
      shoeType: values.shoeType,
      shoeName: values.shoeName,
      shoeSize: values.shoeSize,
      shoeColor: values.shoeColor,
      shoeQuantity: values.shoeQuantity,
      shoePrice: values.shoePrice,
      token: token,
    };

    const newShoe = await addShoesToCollection(httpBody);
    // console.log("Response from addShoesToCollection", shoes);
    tableData.push(newShoe.data);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      const httpBody = {
        collectionId: id.id,
        shoeId: values.id,
        shoeCollectionId: 2,
        manufacturer: values.manufacturer,
        shoeColor: values.shoeColor,
        shoeName: values.shoeName,
        shoePrice: values.shoePrice,
        shoeQuantity: values.shoeQuantity,
        shoeSize: values.shoeSize,
        shoeType: values.shoeType,
        token: token,
      };
      const updatedSet = await updateShoesInCollection(httpBody);

      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
    // console.log("--- handleSaveRowEdits ---");
    // console.log(values);
    // console.log(row);
    // console.log(exitEditingMode);
    // console.log("--- handleSaveRowEdits ---");
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(
          `Are you sure you want to delete ${row.getValue(
            "manufacturer"
          )} ${row.getValue("shoeName")}? size: ${row.getValue("shoeSize")}`
        )
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      const httpBody = {
        collectionId: id.id,
        shoeId: row.getValue("id"),
        token: token,
      };
      deleteShoesFromCollection(httpBody);
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "manufacturer",
        header: "Manufacturer",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "shoeType",
        header: "Type",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "shoeName",
        header: "Name",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "shoeSize",
        header: "Size",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "number",
        }),
      },
      {
        accessorKey: "shoeColor",
        header: "Color",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "shoeQuantity",
        header: "Quantity",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "number",
        }),
      },
      {
        accessorKey: "shoePrice",
        header: "Price",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "number",
        }),
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <div>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </div>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Add New Shoe
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Shoe</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.slice(1).map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Shoe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default InventoryViewOne;
