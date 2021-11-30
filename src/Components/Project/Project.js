import React from 'react';

const Project = ({ project }) => {
    const { title, img, url } = project
    return (

        <div className='col g-3 col-sm-12 col-md-6'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={url} className="btn btn-primary">Live Projects</a>
                </div>
            </div>

        </div>
    );
};

export default Project;