import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary">
        {children}
        <button
          onClick={onClose}
          data-bs-dismiss="alert"
          type="button"
          className="btn-close .alert-dismissible"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
