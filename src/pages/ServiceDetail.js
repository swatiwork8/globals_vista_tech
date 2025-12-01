import { useParams } from "react-router-dom";
import serviceData from "../data/serviceData";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const service = serviceData.find(
    (item) =>
      item.title.replace(/\s+/g, "-").toLowerCase() === serviceId
  );

  return (
    <div className="service-detail">
      <h1>{service?.title}</h1>
      <p>{service?.desc}</p>
    </div>
  );
};

export default ServiceDetail;
