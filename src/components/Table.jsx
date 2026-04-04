import React from "react";

const Table = ( {list,total}) => {
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
              {list.map(({ id, description, quantity, price, amount }) => (
                <React.Fragment key={id}>
                  <tbody>
                    <tr>
                      <td>{description}</td>
                      <td>{quantity}</td>
                      <td>{price}</td>
                      <td>{amount}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              ))}
            </table>

            
      <div>
        <h2 className="flex items-end justify-end text-amber-700 text-4xl font-bold  ">
          ugx. {total.toLocaleString()}
        </h2>
      </div>

    </div>
  );
};

export default Table;
