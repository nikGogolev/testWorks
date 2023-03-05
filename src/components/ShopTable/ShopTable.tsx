import { Button } from "@mui/material";
import React from "react";
import { ProductItem } from "../../serverMock/shopDB";
import RateStars from "../RateStars/RateStars";

import "./ShopTable.css";
interface ShopTableProps {
  products: Array<ProductItem> | undefined;
  makeOrder: (idx: number) => void;
}
function ShopTable(props: ShopTableProps) {
  return (
    <>
      <div className="table-header">
        <div className="table-cell name">Наименование</div>
        <div className="table-cell price">Цена</div>
        <div className="table-cell rate">Рейтинг</div>
        <div className="table-cell order">Заказать</div>
        <div className="table-cell ordered">Статус</div>
      </div>
      {props.products?.map((item, idx) => (
        <div key={item.id} className="table-row">
          <div className="table-cell name">
            <span className="table-cell-content">{item.name}</span>
          </div>
          <div className="table-cell price">
            <span>{item.price}</span>
          </div>
          <div className="table-cell rate">
            <span>
              <RateStars amount={item.rate} />
            </span>
          </div>
          <div className="table-cell order">
            <span>
              <Button onClick={() => props.makeOrder(idx)}>Заказать</Button>
            </span>
          </div>
          <div className="table-cell ordered">
            <span>{item.ordered ? "Заказан" : ""}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShopTable;
