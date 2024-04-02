function AboutCard(props) {
  const { image, title, price } = props.data; 
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      <div className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl h-64 md:h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions">
              <button className="btn btn-primary">${price}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
