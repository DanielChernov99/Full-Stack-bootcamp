import React from 'react';
import Entity from './Entity';
import './Entities.css';
import { useParams,Link } from 'react-router';


const Entities = ({ getCategoryData }) => {
  const { category  } = useParams();
  const entities = getCategoryData(category);

  return (
    <div className="entity-list">
      {getCategoryData(category).map((entity, i) => (
        <Link 
          className="entity-link"
          to={`/wiki/${category}/${entity.name}`}>
          <Entity key={i} category={category} name={entity.name} img={entity.img} level={entity.level} />
        </Link>
      ))}
    </div>
  );
}

export default Entities;
