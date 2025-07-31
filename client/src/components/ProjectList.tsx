import React, { useState, useEffect } from 'react';
import './ProjectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  useEffect(() => {
    fetchProjects();
  }, [pagination.page]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/projects?page=${pagination.page}&limit=${pagination.limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }

      const data = await response.json();
      setProjects(data.projects);
      setPagination(data.pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getPropertyValue = (project, propertyKey) => {
    const property = project.entityProperties?.find(
      prop => prop.propertyDefinition?.property_key === propertyKey
    );
    return property?.string_value || property?.number_value || property?.date_value || property?.bool_value || 'N/A';
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="project-list">
      <h2>Projects</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <div className="project-properties">
              <div className="property">
                <strong>Category:</strong> {getPropertyValue(project, 'Category')}
              </div>
              <div className="property">
                <strong>Year:</strong> {getPropertyValue(project, 'Year Label')}
              </div>
              <div className="property">
                <strong>District:</strong> {getPropertyValue(project, 'District')}
              </div>
              <div className="property">
                <strong>Expenditure:</strong> ${getPropertyValue(project, 'Expenditure').toLocaleString()}
              </div>
              <div className="property">
                <strong>Status:</strong> {getPropertyValue(project, 'Status')}
              </div>
            </div>
            <div className="project-meta">
              <small>Created by: {project.createdBy?.full_name}</small>
              <small>Created: {new Date(project.created_at).toLocaleDateString()}</small>
            </div>
          </div>
        ))}
      </div>

      {pagination.pages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
          >
            Previous
          </button>
          <span>
            Page {pagination.page} of {pagination.pages}
          </span>
          <button 
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.pages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectList; 