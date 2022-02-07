export const Transfer = ({ details }) => {
  return (
    <li>
      <p>{details.date}</p>
      <p>Отправление: {details.time["departure"]} </p>
      <p>Прибытие: {details.time["arrival"]}</p>
    </li>
  );
};
