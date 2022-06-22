import React, { useContext } from "react";
import context from "../../../../context";
import "./RecomendItem.css";

const RecomendItem = () => {
  const { users } = useContext(context.context);

  return (
    <>
      {users.map((item) => {
        return (
          <li className="recomend-user" key={item.id}>
            <a className="recomend-user-link w-100 d-flex align-items-center justify-content-between text-decoration-none text-dark pt-2 pb-3 px-3">
              <div className="recomend-content d-flex align-items-center justify-content-start">
                <img
                  className="recomend-user-img rounded-circle"
                  src={item.avatar}
                  width="50"
                  height="50"
                ></img>
                <div className="recomend-user-info ms-2">
                  <p className="recomend-user-name m-0">{item.first_name} {item.last_name}</p>
                  <p className="recomend-user-email m-0">{`${item.first_name}@email.ru`}</p>
                </div>
              </div>
              <button
                className="recomend-user-btn btn btn-dark rounded-pill"
                type="button"
              >
                Follow
              </button>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default RecomendItem;
