const BlogCard = ({blog}) => {

  const {id, image, description, estate_title} = blog;
  //console.log(id, image, description, estate_title);

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="max-h-[650px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default BlogCard;
