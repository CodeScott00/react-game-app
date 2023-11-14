import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

export const Like = (props: Props) => {
  const [heartColorStatus, setHeartColorStatus] = useState(false);

  const toggle = () => {
    setHeartColorStatus(!heartColorStatus);
    props.onClick();
  };

  if (heartColorStatus) return <AiFillHeart onClick={toggle} size={60} />;
  return <AiOutlineHeart onClick={toggle} size={40} />;
};
