import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTheme =  () => useQuery(["theme"], ()=> {
    console.log("Setting the theme to : ", localStorage.getItem("darkState"))
    localStorage.getItem("darkState") 
}, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
}); 

export default function usePersistentContext(key: any) {
    const queryClient = useQueryClient();
    localStorage.setItem(key, "light");

    const { data } = useQuery(key, () => localStorage.getItem(key));
  
    const { mutateAsync: setGlobalTheme } = useMutation(
      {
        onMutate: (mutatedData) => {
          const current = data;
          queryClient.setQueryData([key], mutatedData);
          return current;
        },
        onError: (_, __, rollback) => {
          queryClient.setQueryData([key], rollback);
        },
      }
    );
  
    return [data, setGlobalTheme];
  }