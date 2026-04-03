import React from "react";

const Table = ({description}) => {
  return (
    <div>
      <p>This is the table</p>

      <table>
        <thead>
          <tr>
            <th>Description</th>
<br/>
            <th>Quantity</th>
<br/>
            <th>Price</th>
<br/>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{description}</td>

            <td>5</td>
            <br/>

            <td className="ml-4 ">20000</td>
<br/>
            <td>60,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
