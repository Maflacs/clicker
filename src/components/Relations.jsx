import React, { useContext } from 'react';
import LangContext from '../context/LangContext';

const Relations = ({ onClick }) => {
    const { state } = useContext(LangContext);
    const currentLang = state.lang === "hu" ? state.hu.relations : state.en.relations;

    return (
        <table className="business-table">
            <tbody>
                {currentLang.map((relation, index) => (
                    relation.unlocked && (
                    <tr key={index}>
                        <td>
                            <img
                                src={relation.link}
                                alt={relation.relationName}
                                data-index={index}
                                onClick={() => onClick(index)}
                            />
                        </td>
                        <td className="price">
                            <p>db: {relation.amount}</p>
                            <p>ár: {formatPrice(relation.price)}</p>
                        </td>
                        <td>
                            <p><strong>{relation.relationName} ({relation.knowledgePerSecIncrement} knowledge / sec)</strong></p>
                            <p>{relation.description}</p>
                        </td>
                    </tr>
                )))}
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
