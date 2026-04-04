import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  // Calculate amount automatically
  useEffect(() => {
    const qty = Number(quantity) || 0;
    const prc = Number(price) || 0;
    setAmount(qty * prc);
  }, [quantity, price]);

  // Calculate total
  useEffect(() => {
    const sum = list.reduce((acc, item) => acc + Number(item.amount || 0), 0);
    setTotal(sum);
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };

    setList([...list, newItem]);
    setDescription("");
    setQuantity("");
    setPrice("");
    setAmount(0);
    setIsEditing(false);
  };

  const editRow = (id) => {
    const item = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));

    setIsEditing(true);
    setDescription(item.description);
    setQuantity(item.quantity);
    setPrice(item.price);
  };

  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-4 space-y-4"
      >
        <h2 className="text-xl font-bold text-gray-700">Add Item</h2>

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item description"
          className="w-full border rounded-lg gap-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="border p-3 rounded-lg"
          />

          <div className="border p-3 rounded-lg bg-gray-100 flex items-center justify-center">
            <span className="font-semibold">Amount: {amount}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-orange-700"
        >
          {isEditing ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* Responsive Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-2">Description</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Price</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item) => (
              <tr key={item.id} className="text-center border-b">
                <td className="p-2">{item.description}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.price}</td>
                <td className="p-2">{item.amount}</td>
                <td className="p-2 flex justify-center gap-2">
                  <button onClick={() => deleteRow(item.id)}>
                    <MdDelete className="text-red-600 text-xl" />
                  </button>
                  <button onClick={() => editRow(item.id)}>
                    <CiEdit className="text-blue-600 text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="mt-4 text-right">
        <h2 className="text-2xl font-bold mr-10 text-green-600">
          UGX {total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};

export default TableForm;
