import "./DesignRow.css";

export function DesignRow({ movement, span, colors, description, forKids, image, odd }) {
  return (
    <tr className= {odd && "odd"}>
      <td style={{color: forKids ? "green" : "red"}}>{movement}</td>
      <td>{span}</td>
      <td>{colors.join(", ")}</td>
      <td>{description}</td>
      <td>{forKids ? "Yes" : "No"}</td>
      <td>
        <img src={image} alt={movement} />
      </td>
    </tr>
  );
}