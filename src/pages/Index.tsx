import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/pdf-to-excel");
  }, [navigate]);

  return null;
};

export default Index;
