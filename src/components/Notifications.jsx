import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideNotifications } from "./redux/userSlice";

export const Notifications = ({ open, close }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);

    if (open) {
        setTimeout(() => {
            setIsOpen(false);
            close()
        }, 1500);
    }

  }, [open]);

  return (
    <>
      {isOpen && (
        <div className="notifications">
          <p>товар добавлен в корзину</p>
        </div>
      )}
    </>
  );
};