import React from "react";

const Table = ({description,quantity,price,amount}) => {
  return (
    <div>
      <table width="100%">
        <thead>
          <tr className="bg-amber-400 text-amber-50 ">
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
