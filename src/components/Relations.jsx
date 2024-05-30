import React, { useContext } from 'react';
import LangContext from '../context/LangContext';

const Relations = ({ color, relations, onClick }) => {
  const { state: { lang } } = useContext(LangContext);

  return (
    <table className={`skills-table ${color}`}>
      <tbody>
        {relations.map((relation, index) => (
          relation.unlocked && (
            <tr key={index}>
              <td className='desc'>
              {lang === "hu" ? (
                    <p>
                      <strong>
                        {relation.relationName[lang]} (
                        {relation.knowledgePerSecIncrement} tudáspont / mp)
                      </strong>
                    </p>
                  ) : (
                    <p>
                      <strong>
                        {relation.relationName[lang]} (
                        {relation.knowledgePerSecIncrement} knowledge / sec)
                      </strong>
                    </p>
                  )}
                <p>{relation.description[lang]}</p>
              </td>
              {lang === "hu" ? (
                  <td className="price">
                    <p>db: {relation.amount}</p>
                    <p>ár: {formatPrice(relation.price)}</p>
                  </td>
                ) : (
                  <td className="price">
                    <p>pcs: {relation.amount}</p>
                    <p>price: {formatPrice(relation.price)}</p>
                  </td>
                )}
              <td>
                <img
                  draggable="false"
                  src={relation.link}
                  alt={relation.relationName[lang]}
                  data-index={index}
                  onClick={() => onClick(index)}
                />
              </td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
};

const formatPrice = (price) => {
  if (price < 1000) return price;
  let kValue = price / 1000;
  return `${kValue}K`;
};

export default Relations;
