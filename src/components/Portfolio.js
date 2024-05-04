import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({ projects }) {
  const [filter, setFilter] = useState('All')

  console.log(projects.filter(p => p.category === filter))
  return (
    <>
      <Toolbar
        filters={['All', 'Websites', 'Flayers', 'Business Cards']}
        selected={filter}
        onSelectFilter={e => setFilter(e.target.innerHTML)}
      />
      <ProjectList projects={filter !== 'All' ? projects.filter(p => p.category === filter) : projects} />
    </>
  )
}

export default Portfolio;