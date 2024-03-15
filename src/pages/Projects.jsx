import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Loading from '../components/Loader/Loading';
import Error from '../components/Error/Error';
import Github from '../components/Github';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = 'mkhue720';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
        const sortedRepos = data.filter(repo => !repo.fork).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
        } else {
          setError('Failed to fetch data from GitHub');
        }
      })
      .catch(err => {
        setError('An error occurred while fetching data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    <Error />
  }

  return (
    <>
    <HelmetProvider>
    <Helmet>
      <title>Projects | NMK</title>
    </Helmet>
    </HelmetProvider>
    <div className="project__heading pb-5">My Projects</div>
    <div className='repo__container mt-[30px]'>
      {repos.map((repo) => (
        <div key={repo.id} className="introduce flex items-center gap-2 text-white ">
          <div className='flex items-center'>
            <span>
              <i className='bx bxl-github' ></i>
            </span>
            <div className="location">
              <a href={repo.html_url}>
                <h3>{repo.name}</h3>
              </a>
            </div>
          </div>
          <h3>{repo.description}</h3>
          <p>
            <span>
              <i className='bx bx-star' style={{color:'#ffb900'}}  ></i>
            </span>
            Stars: {repo.stargazers_count}</p>
          <p>
            <i className='bx bx-git-repo-forked'></i>
            Forks: {repo.forks_count}</p>
          <p>Language: {repo.language}</p>
        </div>
      ))}
    </div>
    <div className="divider mt-[50px]"></div>
    <Github />
    </>
  );
};

export default Projects;