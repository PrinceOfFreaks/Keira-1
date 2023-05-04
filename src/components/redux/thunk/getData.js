import axiosInstance from "../../../axios/axiosInceptors";

export const GetData = (
  page,
  setpage,
  setdata,
  endpoint,
  setlength,
  activeTabIndex,
  searchName
) => {
  return () => {
    const GetdataHandler = () => {
      console.log(endpoint?.searchApi);

      setpage(page);
      if (endpoint?.searchApi == "/get-avatars") {
        axiosInstance.get(`/get-avatars/?page=${page}`).then((response) => {
          setlength(response?.data?.length);
          // setdata(response?.data);
          setdata((prev) => ({
            ...prev,
            avatars: [...prev.avatars, ...response?.data?.avatars],
          }));

          console.log(response?.data);
        });
      } else if (endpoint?.searchApi === "/get-cars") {
        axiosInstance.get(`/get-cars/?page=${page}`).then((response) => {
          setdata((prev) => ({
            ...prev,
            cars: [...prev.cars, ...response?.data?.cars],
          }));
          setlength(response?.data?.length);
          console.log(response.cached, "cache");
        });
      } else if (endpoint?.searchApi === "/search-avatars") {
        axiosInstance
          .post(`/search-avatars/?search=${searchName}`)
          .then((response) => {
            setlength(response?.data?.length);
            setdata(response?.data);
          });
      } else if (endpoint?.searchApi === "/search-cars") {
        axiosInstance
          .post(`/search-cars/?search=${searchName}`)
          .then((response) => {
            setlength(response?.data?.length);
            setdata(response?.data);
          });
      }
    };
    GetdataHandler();
  };
};
