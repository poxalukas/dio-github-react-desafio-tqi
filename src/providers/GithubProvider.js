import React, { createContext, useState } from "react";
import { useCallback } from "react";
import api from '../services/api';

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: []
});

function GithubProvider ({ children }) {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      company: undefined,
      location: undefined,
      blog: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0
    },
    repositories: [],
    starred: []
  });

  const getUser = (username) => {
    setGithubState((prevState) =>({
      ...prevState,
      loading: !prevState.loading
    }));
    api.get(`/users/${username}`)
    .then(({ data }) => {
      setGithubState(prevState =>({...prevState, hasUser: true, user: {
        id: data.id,
        login: data.login,
        avatar: data.avatar_url,
        name: data.name,
        html_url: data.html_url,
        company: data.company,
        location: data.location,
        blog: data.blog,
        followers: data.followers,
        following: data.following,
        public_gists: data.public_gists,
        public_repos: data.public_repos
      }}))
    }).finally(() => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading
      }))
    })
  };

  const getUserRepos = () => {
    api.get(`/users/${githubState.user.login}/repos`)
    .then(({ data }) => {
      console.log('data: ', JSON.stringify(data));
      setGithubState(prevState =>({
        ...prevState, 
        repositories: data
      }))
    })
  }

  const getUserStarred = () => {
    api.get(`/users/${githubState.user.login}/starred`)
    .then(({ data }) => {
      console.log('data: ', JSON.stringify(data));
      setGithubState(prevState =>({
        ...prevState, 
        starred: data
      }))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback(() => getUserRepos()),
    getUserStarred: useCallback(() => getUserStarred()),

  }

  return(
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  ) 
};

export default GithubProvider;