import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Categories } from "../../serverMock/shopDB";
import "./SelectCategory.css";
interface SelectCategoryProps {
  catgories: string[];
  selectCategory?: (category: Categories | string) => void;
}
function SelectCategory(props: SelectCategoryProps) {
  const [listVisible, setListVisible] = useState(false);
  const clickHandler = (item: Categories | string) => {
    if (props.selectCategory instanceof Function) {
      props.selectCategory(item);
      setListVisible(false);
    }
  };
  return (
    <>
      <FontAwesomeIcon
        icon="gear"
        className="fa-2xl"
        onClick={() => setListVisible(!listVisible)}
      />
      {listVisible && (
        <div className="select-category-container">
          {props.catgories.map((item) => (
            <button
              key={item}
              className="select-category-btn"
              onClick={() => clickHandler(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectCategory;
