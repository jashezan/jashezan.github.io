import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const FormFillupNotification = () => {
  return (
    <div className="fixed mx-auto top-96 rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <RxCrossCircled className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Please fill out the form correctly first.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FormFillupNotification;
