'use client';
import { useReducer, useEffect } from 'react';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH SUCCESS':
      return {
        data: action.payload,
        error: null,
        isLoading: false,
      };
    case 'FETCH ERROR':
      return {
        data: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useFetch = (url) => {
  const initialState = {
    data: null,
    isLoading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH START' });

        const response = await fetch('http://localhost:8080/store/products');
        const data = await response.json();
        console.log(data);

        dispatch({
          type: 'FETCH SUCCESS',
          payload: data,
        });
      } catch (e) {
        dispatch({ type: 'FETCH ERROR', payload: e.message });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;
