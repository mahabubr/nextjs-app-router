const NewsDetails = ({params, searchParams}) => {
  return <div>This is news dynamic page : {params.id} | {searchParams.name}</div>;
};

export default NewsDetails;
