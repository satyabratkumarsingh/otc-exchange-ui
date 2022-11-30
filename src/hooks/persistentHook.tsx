import { QueryKey, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { kStringMaxLength } from 'buffer';
import { useState, useEffect } from 'react';

export const usePersistentState = (localStorageKey: any) => {
    const [value, setValue] = useState(() => {
      const localStorageItem = localStorage.getItem(localStorageKey);
      if (localStorageItem === null) return '';
      try {
        return JSON.parse(localStorageItem);
      } catch (err) {
        return '';
      }
    });
  
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);
  
    // Expose the value and the updater function.
    return [value, setValue];
  };

export const usePersistentContext = (key: any, default_value: any) => {
  const queryClient = useQueryClient();

  const { data } = useQuery<any>([key], () => { 
    const localStorageItem = localStorage.getItem(key);
      if (localStorageItem === null) return default_value;
     return localStorage.getItem(key);
    }
  );
 const { mutateAsync : setValue} = useMutation((value: any) =>
        {
            localStorage.setItem(key, value);
            return value;
        }, 
        {
            onMutate: (mutatedData: any) => {
                const current = data;
                queryClient.setQueryData([key], mutatedData);
                return current;
            },
            onError: (_, __, rollback) => {
                queryClient.setQueryData([key], rollback);
            },
        }

    )
    return [data, setValue];
 }
