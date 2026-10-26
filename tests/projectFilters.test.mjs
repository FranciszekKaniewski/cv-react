import assert from 'node:assert/strict';
import test from 'node:test';
import {createProjectFilters, filterProjects} from '../src/utils/projectFilters.ts';

const projects = [
    {id: 'team', category: 'university', technologies: ['react', 'cpp'], featured: true, group: true},
    {id: 'demo', category: 'personal', technologies: ['react', 'typescript'], demoUrl: 'https://example.com/demo'},
    {id: 'course', category: 'courses', technologies: ['python'], featured: true},
    {id: 'bare', category: 'personal', technologies: ['cpp'], demoUrl: ''},
];
const ids = (filters = {}) => filterProjects(projects, {...createProjectFilters(), ...filters}).map(({id}) => id);

test('default filters return all projects in their original order', () => {
    assert.deepEqual(ids(), ['team', 'demo', 'course', 'bare']);
});

test('each category selects only its projects', () => {
    assert.deepEqual(ids({category: 'university'}), ['team']);
    assert.deepEqual(ids({category: 'personal'}), ['demo', 'bare']);
    assert.deepEqual(ids({category: 'courses'}), ['course']);
});

test('star, group and demo switches use the correct metadata', () => {
    assert.deepEqual(ids({featured: true}), ['team', 'course']);
    assert.deepEqual(ids({group: true}), ['team']);
    assert.deepEqual(ids({demo: true}), ['demo']);
});

test('a project must contain every selected technology', () => {
    assert.deepEqual(ids({technologies: ['react']}), ['team', 'demo']);
    assert.deepEqual(ids({technologies: ['react', 'cpp']}), ['team']);
    assert.deepEqual(ids({technologies: ['react', 'python']}), []);
});

test('categories, switches and technologies combine, including zero matches', () => {
    assert.deepEqual(ids({category: 'university', featured: true, group: true, technologies: ['cpp']}), ['team']);
    assert.deepEqual(ids({category: 'personal', demo: true, technologies: ['react']}), ['demo']);
    assert.deepEqual(ids({featured: true, demo: true}), []);
});

test('filtering leaves source data unchanged and reset creates independent state', () => {
    const before = structuredClone(projects);
    const filters = createProjectFilters();
    filters.technologies.push('react');
    filterProjects(projects, filters);
    assert.deepEqual(projects, before);
    assert.deepEqual(createProjectFilters().technologies, []);
});
