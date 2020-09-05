import React from 'react';

import { projects } from './projects';
import { Link } from 'react-router-dom';

import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <h2>Projects</h2>
      {projects.map((category, index) => (
        <div className='Portfolio__category' key={index}>
          <h6 className='Portfolio__category__label'>{category.category}</h6>
          {category.projects.map((project, index) => (
            <div className='Portfolio__item' key={index}>
              <h2>{project.title}</h2>
              <div className='Portfolio__item__description'>
                <div className='Portfolio__item__tools'>
                  <h6>Tool used</h6>
                  {project.tools.map((tool, index) => (
                    <div className='Portfolio__item__tool' key={index}>
                      <div className='pill'>{tool}</div>
                    </div>
                  ))}
                </div>
                {project.description}
                {!!project.link && (
                  <Link to={project.link} className='Portfolio__item__link btn'>
                    Check it out ⇛
                  </Link>
                )}
              </div>
              <div className='Portfolio__item__images'>
                {project.images &&
                  project.images.map((image, idx) => (
                    <div className='Portfolio__item__image' key={idx}>
                      <div
                        className='Portfolio__item__image__content'
                        style={{
                          backgroundImage: `url(${image})`,
                          ...project.imageContentStyle,
                        }}></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
