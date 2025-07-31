import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    const getPropertyValue = (project, propertyKey) => {
        const property = project.entityProperties?.find(prop => prop.propertyDefinition?.property_key === propertyKey);
        return property?.string_value || property?.number_value || property?.date_value || property?.bool_value || 'N/A';
    };
    const handlePageChange = (newPage) => {
        setPagination(prev => ({ ...prev, page: newPage }));
    };
    if (loading) {
        return _jsx("div", { className: "loading", children: "Loading projects..." });
    }
    if (error) {
        return _jsxs("div", { className: "error", children: ["Error: ", error] });
    }
    return (_jsxs("div", { className: "project-list", children: [_jsx("h2", { children: "Projects" }), _jsx("div", { className: "projects-grid", children: projects.map(project => (_jsxs("div", { className: "project-card", children: [_jsx("h3", { children: project.name }), _jsxs("div", { className: "project-properties", children: [_jsxs("div", { className: "property", children: [_jsx("strong", { children: "Category:" }), " ", getPropertyValue(project, 'Category')] }), _jsxs("div", { className: "property", children: [_jsx("strong", { children: "Year:" }), " ", getPropertyValue(project, 'Year Label')] }), _jsxs("div", { className: "property", children: [_jsx("strong", { children: "District:" }), " ", getPropertyValue(project, 'District')] }), _jsxs("div", { className: "property", children: [_jsx("strong", { children: "Expenditure:" }), " $", getPropertyValue(project, 'Expenditure').toLocaleString()] }), _jsxs("div", { className: "property", children: [_jsx("strong", { children: "Status:" }), " ", getPropertyValue(project, 'Status')] })] }), _jsxs("div", { className: "project-meta", children: [_jsxs("small", { children: ["Created by: ", project.createdBy?.full_name] }), _jsxs("small", { children: ["Created: ", new Date(project.created_at).toLocaleDateString()] })] })] }, project.id))) }), pagination.pages > 1 && (_jsxs("div", { className: "pagination", children: [_jsx("button", { onClick: () => handlePageChange(pagination.page - 1), disabled: pagination.page === 1, children: "Previous" }), _jsxs("span", { children: ["Page ", pagination.page, " of ", pagination.pages] }), _jsx("button", { onClick: () => handlePageChange(pagination.page + 1), disabled: pagination.page === pagination.pages, children: "Next" })] }))] }));
};
export default ProjectList;
